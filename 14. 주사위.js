function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "/주사위") {
        var dice = Math.floor(Math.random() * 6) + 1;
        replier.reply("주사위 결과 : " + dice);
    }
}

