var preChat = {};

function response(room, msg, sender, isGroupChat, replier) {
    if (preChat[room] == msg) return;
    preChat[room] = msg;
    
    //나머지 소스 코드

}

