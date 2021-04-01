function response(room, msg, sender, isGroupChat, replier) {
    /* 수신된 채팅 내용을 띄어쓰기 단위로 잘라서 배열로 만듬 */
    var cmd = msg.split(" ");
    
    /* 자른 결과들 중 가장 앞에 있는게 '/따라하기 '라면, */
    if (cmd[0]=="/따라하기") {
    
        /* 수신된 채팅 내용 중 '/따라하기 '를 삭제 */
        var result = msg.replace("/따라하기 ", "");
        
        /* 삭제한 내용 전송 */
        replier.reply(result);
    }
}

