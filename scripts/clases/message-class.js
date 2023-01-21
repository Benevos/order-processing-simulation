class message
{
    constructor(type, id)
    {
        this.type = type;
        this.id = id;
        type.setAttribute("id","msg"+id)
        type.src = "/modelos/carta2.jpg";
        type.style.position = "absolute";
        type.style.height = "15px";
        type.style.width = "20px";
        document.getElementById("body").appendChild(this.type);
    }

    moveTop(top)
    {
        this.type.style.top = top+"px";
    }

    moveLeft(left)
    {
        this.type.style.left = left+"px";
    }
}

async function mensajes(msgId)
{ 
    if(cond1)
    {
        start2 = performance.now();
        cond1 = false;
    }
    msgs[i] = new message(document.createElement("img"), msgId);
    
    // Posicion inicial
    msgs[i].moveTop(225);
    msgs[i].moveLeft(100);
    await sleep(1000);

    //Creacion orden
    msgs[i].moveLeft(215);
    crSubMsg(subMsgOrd);
    subMsgOrd++;
    await sleep(1000);

    //Logistica
    msgs[i].moveLeft(375)
    genPen++;
    await sleep(1000);

    //Impresora
    msgs[i].moveLeft(545);
    penOrd++;
}

async function crSubMsg(subMsgOrd)
{
    subMsg[subMsgOrd] = new message(document.createElement("img"),"Sub"+subMsgOrd);
    subMsg[subMsgOrd].moveTop(300);
    subMsg[subMsgOrd].moveLeft(215);
    await sleep(2000);
    subMsg[subMsgOrd].moveTop(350);
    await sleep(1000);
    document.getElementById("body").removeChild(document.getElementById("msgSub"+subMsgOrd));
}

async function crTrkMsg(trkMsgNum)
{
    trkMsg[trkMsgNum] = new message(document.createElement("img"), "Trk"+trkMsgNum)

    trkMsg[trkMsgNum].moveTop(320);
    trkMsg[trkMsgNum].moveLeft(1050);
    await sleep(400);
    trkMsg[trkMsgNum].moveTop(140);
    await sleep(400);
    trkMsg[trkMsgNum].moveLeft(715);
    await sleep(400);
    trkMsg[trkMsgNum].moveLeft(380);
    await sleep(400);
    trkMsg[trkMsgNum].moveTop(225);
    await sleep(400);
    trkMsg[trkMsgNum].moveTop(350);
    await sleep(1000);

    document.getElementById("body").removeChild(document.getElementById("msgTrk"+trkMsgNum));
    genFin = genFin + 3;
}