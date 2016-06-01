var express = require('express');
var router = express.Router();

var cookie = require('./cookie')

/* GET home page. */
router.get('/', function (req, res, next) {
    cookie.redirect_js(req, res, next)
    //res.render('index', {title: 'Express'});
});

module.exports = router;
