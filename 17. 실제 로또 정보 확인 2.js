function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "/로또") {
        var data = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?query=로또").get();
        data = data.select("div.lot_num");
        data = data.select("li");
        replier.reply("이번 회차 당첨 번호\n" + data.text());
    }
}

