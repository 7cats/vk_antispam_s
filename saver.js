function save(db, verdict, text, img_url) {
    var key = {
        verdict: verdict,
        date: new Date()
    }

    var value = {
        text: text,
        img: img_url
    }

    db.put(key, value);
}

exports.save = save;