function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" ");
    
    /* 수신된 채팅 내용 중 앞부분을 삭제 */
    var data = msg.replace(cmd[0]+" ", "");
    
    /* 자른 결과들 중 가장 앞에 있는게 '/영한'이라면, */
    if (cmd[0]=="/영한") {
    
        /* 영어 -> 한국어 번역 */
        var result = Api.papagoTranslate("en", "ko", data);
        
        /* 번역 결과 전송 */
        replier.reply("번역 결과: "+result);
        
    /* 1번째 if 종료 */
    }
    
    /* 자른 결과들 중 가장 앞에 있는게 '/한영'이라면, */
    if (cmd[0]=="/영한") {
    
        /* 한국어 -> 영어 번역 */
        var result = Api.papagoTranslate("ko", "en", data);
        
        /* 번역 결과 전송 */
        replier.reply("번역 결과: "+result);
        
    /* 2번째 if 종료 */
    }

/* 이벤트 리스너 종료*/
}

