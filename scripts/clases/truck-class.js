class truck
{
    constructor(type, id)
    {
        this.type = type;
        this.id = id;
        type.setAttribute("id","trk"+id);
        type.style.position = "absolute";
        type.style.height = "50px";
        type.style.width = "50px";
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

    setImage(path)
    {
        this.type.src = path;
    }
}

function crearTrk()
{
    trks[0] = new truck(document.createElement("img"),0);
    trks[0].setImage("/modelos/Camion.png");
    trks[0].moveTop(350);
    trks[0].moveLeft(1050);

    trks[1] = new truck(document.createElement("img"),1);
    trks[1].setImage("/modelos/Camion.png");
    trks[1].moveTop(380);
    trks[1].moveLeft(1050);

    trks[2] = new truck(document.createElement("img"),2);
    trks[2].setImage("/modelos/Camion.png");
    trks[2].moveTop(410);
    trks[2].moveLeft(1050);
}

async function remTrk(idTrk, trkMsgNum)
{
    crTrkMsg(trkMsgNum);
    await sleep(2000);
    trks[idTrk].setImage("/modelos/none.png");
    if(cond2)
    {
        end2 = performance.now()
        TP2 = (end2 - start2)/1000
        cond2 = false;
    }
}

async function spTrk(idTrk)
{
    await sleep(25000);
    trks[idTrk].setImage("/modelos/Camion.png");
}