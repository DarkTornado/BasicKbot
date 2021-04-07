function papagoTranslate(lang1, lang2, value) {
    try {
        var res = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/papago/n2mt")
        .header("X-Naver-Client-Id", "Client Id 입력") //헤더는 .header()로 보낼 수 있고,
        .header("X-Naver-Client-Secret", "Client Secret 입력")
            .data("source", lang1)  //파라미터는 .data();로 보낼 수 있어요
            .data("target", lang2)
            .data("text", value)    
            .ignoreContentType(true)
            .ignoreHttpErrors(true)
            .post().text();
        var data = JSON.parse(res);  //JSON 형식으로 된 문자열을 객체로 바꿔요
        return data.message.result.translatedText;  //해당 필드에 저장된 값을 반환해요
    } catch (e) {
        return null;  //위 과정에서 오류가 발생하면 null을 반환해요
    }
}

function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" ");
    if (cmd[0] == "/번역") {
        cmd.shift();
        var result = papagoTranslate(cmd.shift(), cmd.shift(), cmd.join(" "));
        if (result == null) replier.reply("번역 실패");
        else replier.reply(result);
    }
}

