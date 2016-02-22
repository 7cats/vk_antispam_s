function analyze(url, dirname) {
    var name = new Date().toISOString() + ".png";
    download_img(url, name);
    return tesseract(name, dirname);
}

function download_img(url, name) {
    var fs = require('fs'),
        request = require('request');

    var download = function(uri,  filename, callback){
        request.head(uri, function(err, res, body){
            request(uri).pipe(fs.createWriteStream(__dirname + '/' + filename)).on('close', callback);
        });
    };

    download(url, name, function(){
        //magic
    });
}

function tesseract(name, dirname) {
    var tesseract = require('node-tesseract');

    var options = {
        l: 'rus'
    };

    tesseract.process(__dirname + '/' + name, options, function(err, text) {
        if (err)
            console.log(err);
        console.log(text);
        return text;
    });
}


exports.analyze = analyze;
