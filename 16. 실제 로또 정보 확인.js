function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "/로또") {
        var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=로또");
        data = data.replace(/(<([^>]+)>)/g, "");
        data = data.split("1년")[2];
        data = data.split("QR")[0];
        data = data.trim();
        data = data.replace(/ /g, "");
        data = data.replace(/\n/g, " ");
        replier.reply("이번 회차 당첨 번호\n" + data);
    }
}

