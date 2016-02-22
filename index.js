var express = require('express');
var app = express();
var url = require("url");
var parsepar = require("querystring");
var find = require("./spamdetect");
//var levelup = require("levelup");
//var db = levelup("../database");
var index = 0;

app.get('/spamdetect', function (request, response) {
    var text_of_post = parsepar.parse(url.parse(request.url).query)["text"];

    var img_url = parsepar.parse(url.parse(request.url).query)["img"];

    var analyzer = require("./analyzer");

    var name = new Date().toISOString() + ".png";
    //analyzer.downloader(img_url, name);

    analyzer.analyze(img_url, name, response, text_of_post);

    index += 1;
    text_of_post = text_of_post.toLowerCase();

    console.log(index + " success " + find.spamdetect(text_of_post) + " " + text_of_post);


   // var saver = require("./saver")
    //saver.save(db, find.spamdetect(text_of_post), text_of_post, img_url);


})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
})
