/// <reference path="../typings/tsd.d.ts"/>
"use strict";
var config = require('../config');
var twit = require('twitter');
var express = require('express');
var router = express.Router();
var twitter = new twit({
    consumer_key: config.TWITTER_CONSUMER_KEY,
    consumer_secret: config.TWITTER_CONSUMER_SECRET,
    access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/tweets', function (req, res, next) {
    twitter.get('search/tweets', { q: 'javascript', lang: 'es' }, function (error, tweets, response) {
        if (error)
            throw error;
        res.send("<pre>" + JSON.stringify(tweets, null, 2) + "</pre>");
    });
});
router.get('/update', function (req, res, next) {
    twitter.post('statuses/update', { status: 'Hello Universe' }, function (error, tweets, response) {
        //if(error) throw error;
        res.send("<pre>" + JSON.stringify(tweets, null, 2) + "</pre>");
    });
});
module.exports = router;
