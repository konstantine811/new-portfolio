var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://user:1234@ds115166.mlab.com:15166/portfolio', ['languages']);

router.get('/lang', function(req, res, next) {
    db.languages.find(function(err, lang) {
        if(err) {
            res.send(err);
        }
        res.json(lang);
    });
});

module.exports = router;