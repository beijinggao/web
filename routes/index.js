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
router.get('/blog.html', function(req, res, next) {
    var url="http://www.qiushibaike.com/8hr/page/"+req.query.page+"/?s=4882864";
    var data= new ArrayList;
    jsdom.env({
        url: url,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, window) {
            var $ = window.$;
            $('.content').each(function(index,value){
                data.set(index,$(value).text());
            });
            res.render('blog', {title: data});
        }
    });
});
router.get('/index.html', function(req, res, next) {
    res.render('index', {title: 'aaaaaaaaaaaaaaaaaa'});
    res.send('respond with a resource');
});

module.exports = router;
