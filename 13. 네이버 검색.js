function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");
    if (msg == "/검색") {
        replier.reply("네이버 검색 결과 : https://m.search.naver.com/search.naver?query="
          + data.replace(/ /g, "%20"));
    }
}

