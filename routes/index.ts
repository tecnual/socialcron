/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var config = require('../config');

var twit = require('twitter');

var express = require('express');
var router = express.Router();
var path = require('path');

var twitter = new twit({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
})

/* GET home page. */
router.get('/', (req: Request, res: Response, next: Function) => {
  res.render('index', { title: 'Express' })
});

router.get('/tweets', (req: Request, res: Response, next: Function) => {
  twitter.get('search/tweets', {q: 'javascript', lang: 'es'}, function (error: Error,tweets: any,response: Response){
    if(error) throw error;
    res.send("<pre>"+JSON.stringify(tweets,null,2)+"</pre>");
  })
})

module.exports = router;
