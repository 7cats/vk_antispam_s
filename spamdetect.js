function spamdetect (text){
    var spam_key = new Array ('public','оплат', 'жми на', 'репост', 'розыгр', 'разыгр', 'разыгрываем', 'акци', 'конкурс', 'скидк', 'распродаж', 'доход', 'заработок','выигрыш  за день');
    var notspam_key = new Array ('pikabu', 'ингридиенты', 'рецепт', 'приготовление','подборк');
    var verdict = "NOT SPAM";

    for (i = 0; i < spam_key.length; i++) {
        if (text.indexOf(spam_key[i]) != -1) {
            verdict = "SPAM";
            break;
        }
    }

    if (verdict === "SPAM") {
        for (j = 0; j < notspam_key.length; j++) {
            if (text.indexOf(notspam_key[j]) != -1) {
                verdict = "NOT SPAM";
                break;
            }
        }
    }

    return verdict;
}

exports.spamdetect = spamdetect;

