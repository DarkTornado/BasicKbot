function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "/시간") {
        var day = new Date();
        replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() +
            "분 " + day.getSeconds() + "초에요.");
    }
}

