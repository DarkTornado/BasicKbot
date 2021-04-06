function response(room, msg, sender, isGroupChat, replier) {
    if (msg == "/날씨") {
        var data = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?query=날씨").get();
        data = data.select("div.lcl_lst").get(0);
        data = data.select("a");
        var result = [];
        for (var n = 0; n < data.size(); n++) {
            result[n] = data.get(n).text();
        }     
        replier.reply("[전국 날씨 정보]\n\n" + result.join("\n").replace(/도씨/g, "℃"));
    }
}

