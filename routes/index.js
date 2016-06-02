var express = require('express');
var router = express.Router();

var cookie = require('./cookie')
//var request = require('request');
//var $ = require('jquery');
var jsdom = require('jsdom');
var ArrayList = require('arrayList');

/* GET home page. */
router.get('/', function (req, res, next) {
    cookie.redirect_js(req, res, next)
    //res.render('index', {title: 'Express'});
});
router.get('/blog.html', function(req, res, next) {
    var url="http://www.qiushibaike.com/"
    var data= new ArrayList;
    jsdom.env({
        url: url,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, window) {
            var $ = window.$;
            $('.content').each(function(index,value){
                data.set(index,$(value).text());
            });
            console.log(data);
            res.render('blog', {title: data});
        }
    });
});
router.get('/index.html', function(req, res, next) {
    res.render('index', {title: 'aaaaaaaaaaaaaaaaaa'});
    res.send('respond with a resource');
});

module.exports = router;
