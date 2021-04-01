function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "/로또") {
        var lotto = [];
        for (var n = 0; n < 7; n++) {
            var ran = Math.floor(Math.random() * 45) + 1;
            if (lotto.includes(ran)) n--;
            else lotto.push(ran);
        }
        var bonus = lotto.pop();
        replier.reply("로또 결과 : " + lotto.join(", ") + " + " + bonus);
    }
}

