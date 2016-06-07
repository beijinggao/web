var express = require('express');
var router = express.Router();

var cookie = require('./cookie')
//var request = require('request');
//var $ = require('jquery');
var jsdom = require('jsdom');
var ArrayList = require('arraylist');

/* GET home page. */
router.get('/', function (req, res, next) {
    cookie.redirect_js(req, res, next)
    //res.render('index', {title: 'Express'});
});
router.get('/blog.html', function (req, res, next) {
    var pager=req.query.page;
    if(pager ==undefined) pager=1;
    var url = "http://www.qiushibaike.com/8hr/page/" + pager + "/?s=4882864";
    var data = new ArrayList;
    jsdom.env({
        url: url,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, window) {
            var $ = window.$;
            $('.article').each(function (index, value) {
                console.log($(this).find('.thumb img').attr('src'));
                var content = $(value).find('.content').text();
                var img = $(value).find('.thumb img').attr('src');
                if(img !=undefined){
                    data.set(index, [content, img]);
                }else{
                    data.set(index, [content]);
                }
            });
            /*$('.content').each(function (index, value) {
                data.set(index, $(value).text());
            });*/
            var pages=[];
            if(pager>=6){
                pages[0]=pager-2;
                pages[1]=pager-1;
                pages[2]=pager;
                pages[3]=parseInt(pager)+1;
                pages[4]=parseInt(pager)+2;
            }
            res.render('blog', {title: data,pager:pager,pages:pages});
        }
    });
});
router.get('/index.html', function (req, res, next) {
    res.render('index', {title: 'aaaaaaaaaaaaaaaaaa'});
    res.send('respond with a resource');
});

module.exports = router;
