function analyze(img, name,  response, text_of_post) {
    tesseract(img, name, response, text_of_post);
}

function download_img(url, name) {

}

function tesseract(url, name, response, text_of_post) {
    var tesseract = require('node-tesseract');
    var find = require("./spamdetect");
    var express = require('express');

    var options = {
        l: 'rus'
    };

    var fs = require('fs'),
        request = require('request');

    var download = function(uri,  filename, callback){
        request.head(uri, function(err, res, body){
            request(uri).pipe(fs.createWriteStream(__dirname + '/' + filename)).on('close', callback);
        });
    };

    download(url, name, function(){
        tesseract.process(__dirname + '/' + name, options, function(err, text) {
            if (err)
                console.log(err);

            response.json({"status": 200, "verdict": find.spamdetect(text_of_post + text), "message": text_of_post, "message on img": text});
            //console.log(text);
            // return text;
        });
    })






}


exports.analyze = analyze;
exports.downloader = download_img;