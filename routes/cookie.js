/**
 * Created by Gao on 2016/3/14.
 */
var uuid = require('node-uuid');
var md5 = require('MD5');

//define exports
var exports = module.exports = {};

var fs = require('fs');
var url_parser =require('url');
var querystring = require("querystring");

var UID_SUFFIX=""; //"030";

var ip_pat=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
//KeepAliveAgent = require('keep-alive-agent');
//var keepalive = new KeepAliveAgent();
function get_domain(host) {
    var pos = host.indexOf(":");
    if(pos >0)
        host = host.substr(0,pos);
    var flds = host.split(".");
    var len = flds.length;
    var domain = "";

    //check ip
    if(host.match(ip_pat)){
        return "";
    }
    if(len >=3){
        if(flds[len-1]=="cn"){
            var se = flds[len-2];
            if(se == "com" || se == "net" || se == "org" || se == "edu" || se == "gov"){
                domain = "."+flds[len-3]+"."+se +"."+ flds[len-1];
            }else{

                domain = "."+se +"."+ flds[len-1];
            }
        }else{
            var se = flds[len-2];
            domain = "."+se +"."+ flds[len-1];
        }
    }

    return domain;
}

//redirected gif for cookie mapping of adx
//example: http://cm.clickwise.cn/baidu.gif ---- 302 to --->
//js.orchidscape.net/r.gif?&u=http......
//
// Here we check our cookie and redirect back with uaid parameter
//redirect to here if no cookie is set for front-end request
function redirect_nojs(req,res,next){
    //check if our user
    var u = req.query.u;
    if (typeof u =="undefined" || u.length <=0){
        res.send("");
        return;
    }

    var uaid = req.cookies.uaid;
    if(typeof uaid == "undefined" || uaid.length <32){
        //allocate a new uaid
        uaid = md5(uuid.v4()) + UID_SUFFIX;
        //set cookie
        var host = req.host;
        var domain =  get_domain(host);
        res.cookie('uaid',uaid,{ expires: new Date(Date.now() + 60*60*24*3650), domain: domain, path: '/'});
        var refer = req.headers['referer'];
        if(typeof refer != "undefined" && refer.length >5){
            var foo = url_parser.parse(refer);
            var host = foo.host;
            var domain =  get_domain(host);
            res.cookie('uaid',uaid,{ expires: new Date(Date.now() + 60*60*24*3650), domain: domain, path: '/'});
        }
    }
    if(u.indexOf('?')<0)
        u = u +"?uaid="+uaid;
    else
        u = u +"&uaid="+uaid;
    res.redirect(u);
}

var imgdata = [
    0x47,0x49, 0x46,0x38, 0x39,0x61, 0x01,0x00, 0x01,0x00, 0x80,0x00, 0x00,0xFF, 0xFF,0xFF,
    0x00,0x00, 0x00,0x21, 0xf9,0x04, 0x04,0x00, 0x00,0x00, 0x00,0x2c, 0x00,0x00, 0x00,0x00,
    0x01,0x00, 0x01,0x00, 0x00,0x02, 0x02,0x44, 0x01,0x00, 0x3b
]
var imgbuf = new Buffer(imgdata)

function cgif(req,res,next){
    var uaid = req.cookies.uaid;
    if(typeof uaid == "undefined" || uaid.length <32){
        //allocate a new uaid
        uaid = md5(uuid.v4()) + UID_SUFFIX;
        //set cookie
        var host = req.host;
        var domain =  get_domain(host);
        res.cookie('uaid',uaid,{ expires: new Date(Date.now() + 60*60*24*3650), domain: domain, path: '/'});
        var refer = req.headers['referer'];
        if(typeof refer != "undefined" && refer.length >5){
            var foo = url_parser.parse(refer);
            var host = foo.host;
            var domain =  get_domain(host);
            res.cookie('uaid',uaid,{ expires: new Date(Date.now() + 60*60*24*3650), domain: domain, path: '/'});
        }
    }

    res.writeHead(200,{
        'Content-Type': 'image/gif',
        'Content-Length': imgdata.length
    })
    res.end(imgbuf)
}

//redirected gif for cookie mapping of adx
//example: http://cm.clickwise.cn/baidu.gif ---- 302 to --->
//js.orchidscape.net/r.gif?&u=http......
//
// Here we check our cookie and redirect back with uaid parameter
//redirect to here if no cookie is set for front-end request
function redirect_js(req,res,next){
    //check if our user
    /*var u = req.query.u;
    if (typeof u =="undefined" || u.length <=0){
        res.send("");
        return;
    }*/
    var u="";

    var uaid = req.cookies.uaid;
    var ret = "";
    if(typeof uaid == "undefined" || uaid.length <32){
        //allocate a new uaid
        uaid = md5(uuid.v4()) + UID_SUFFIX;
        //set cookie
        var host = req.host;
        var domain =  get_domain(host);
        ret += 'document.cookie = "uaid=' + uaid + '; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=' + domain + '";';
        res.cookie('uaid',uaid,{ expires: new Date(Date.now() + 60*60*24*3650), domain: domain, path: '/'});
        var refer = req.headers['referer'];
        if(typeof refer != "undefined" && refer.length >5){
            var foo = url_parser.parse(refer);
            var host = foo.host;
            var domain =  get_domain(host);
            res.cookie('uaid',uaid,{ expires: new Date(Date.now() + 60*60*24*3650), domain: domain, path: '/'});
            ret += 'document.cookie = "uaid=' + uaid + '; expires=Sun, 08-Aug-2021 06:05:50 GMT; path=/; domain=' + domain + '";';
        }
        ret += ";ouid='"+uaid+"';";
    }else{
        ret += "var ouid='"+uaid+"';";
    }
    if(u.indexOf('?')<0)
        u = u +"?uaid=";
    else
        u = u +"&uaid=";
    ret +='var ft=function(){var u1="'+u+'";u1+=ouid;document.write("<script src=\'"+u1+'+'"\'></script>");};setTimeout(ft,300);';
    //res.send("<!--\n" +ret + "\n//-->");
    res.render('index', {title: uaid});
}

//export functions
exports.redirect_nojs = redirect_nojs;
exports.redirect_js = redirect_js;
exports.cgif = cgif;