function response(room, msg, sender, isGroupChat, replier) {
    /* 수신된 채팅이 '/따라하기 '로 시작하면 */
    if (msg.startsWith("/따라하기 ")) {
    
        /* 수신된 채팅 내용 중 '/따라하기 '를 삭제 */
        var result = msg.replace("/따라하기 ", "");
        
        /* 삭제한 내용 전송 */
        replier.reply(result);
        
    /* if문 종료 */
    }
}

