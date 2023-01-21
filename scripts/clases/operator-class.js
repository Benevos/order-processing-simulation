class operator
{
    constructor(type)
    {
        this.type = type;
        type.src = "/modelos/operador.png";
        type.style.position = "absolute";
        type.style.height = "40px";
        type.style.width = "70px";
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

var start1, end1;

async function operador1()
{
    //Revisa si hay pedidos pendientes
    async function chPrt()
    {
        if(penOrd>0)
        {
            start1 = performance.now();
            penOrd--;
            op1.moveTop(225);
            op1.moveLeft(545);
            await sleep(1000);
            document.getElementById("body").removeChild(document.getElementById("msg"+msgNum));
            msgNum++;
            genPen--;
            chPrtCheck = true;
        }
        else
        {
            await sleep(2000);
            await chPrt();
        }
    }

    //Si hay pedidos pendientes, empieza a prepararlos
    async function grBox()
    {
        if(chPrtCheck == true)
        {
            //Caja
            op1.moveTop(350);
            op1.moveLeft(700);
            await sleep(1500);

            //Orden1
            op1.moveTop(200)
            op1.moveLeft(800)
                //*Crea caja
                crearBox(boxId);
                boxId++;
                boxI++;
            await sleep(1500);

            //Mercancia
            op1.moveTop(200);
            op1.moveLeft(700)
            await sleep(1500);

            //Orden2
            op1.moveTop(200)
            op1.moveLeft(950)
                //*Crea mercancia
                crearMerch(merId);
                packOrd++;
                merId++;
                merI++;
            await sleep(1500);
        }
        else
        {
            await sleep(2000);
            await grBox();
        }
    }

    var op1 = new operator(document.createElement("img"));
    var chPrtCheck = false;
    var msgNum = 0;
    var merId = 0;
    var boxId = 0;

    //Posicion inicial
    op1.moveLeft(600);
    op1.moveTop(300);

    do
    {
        await chPrt();
        await grBox();
    }
    while(penOrd>0);

    op1.moveLeft(600);
    op1.moveTop(300);
}

async function operador2()
{
    //Se encarga de empacar
    async function pack()
    {
        op2.moveLeft(950);

        if(posMer2 == 0)
        {
            op2.moveTop(200);
        }
        else if(posMer2 == 1)
        {
            op2.moveTop(230);
        }
        else if(posMer2 == 2)
        {
            op2.moveTop(250);
        }

        await sleep(1000);
        document.getElementById("body").removeChild(document.getElementById("mer"+merNum));
        op2.moveLeft(820);
        await sleep(1000);
        op2.moveTop(330);
        boxes[merNum].setImage("/modelos/caja_2.png")
        
        if(chNewPos3)
        {
            boxes[merNum].moveLeft(leftPos3);
            if(merNum == (14||29||44||59))
            {
                leftPos3 = 810;
            }
        }
        if(posMer2 == 0)
        {
            boxes[merNum].moveTop(350);
            posMer2++;
        }
        else if(posMer2 == 1)
        {
            boxes[merNum].moveTop(370);
            posMer2++;
        }
        else if(posMer2 == 2)
        {
            boxes[merNum].moveTop(390);
            posMer2 = 0;
            leftPos3 = leftPos3+30;
            chNewPos3 = true;
            loadOrd++;
        }
        merNum++;
        await sleep(1000);
    }

    //Revisa si hay una orden de empaque lista
    async function chOrd()
    {
        if(packOrd!=0)
        {
            await pack();
            packOrd--;
        }
        else
        {
            await sleep(2000);
            await chOrd();
        }
        op2.moveTop(220);
        op2.moveLeft(980);
    }

    var op2 = new operator(document.createElement("img"));
    var posMer2 = 0;
    var merNum = 0;
    var leftPos3 = 840;
    var chNewPos3 = false;

    //Posicion inicial
    op2.moveTop(220);
    op2.moveLeft(980);
    await sleep(2000);

    while(true)
    {
        await chOrd();
    }
}

async function operador3()
{
    async function loadTrk()
    {
        for(let trkCharge = 0;trkCharge<3;trkCharge++)
        {
            op3.moveTop(360);
            op3.moveLeft(830);
            await sleep(1000);
            op3.moveTop(topPos4);
            op3.moveLeft(1020);
            document.getElementById("body").removeChild(document.getElementById("box"+remBox));
            remBox++;
            await sleep(1000);
            trkNum++;
        }
        if(trkNum == 3)
        {
            topPos4 = topPos4 + 30;
            trkNum = 0;
            reTrk++;
            if(reTrk == 3)
            {
                topPos4 = 360;
                reTrk = 0;
            }
        }

        if(idTrk==3) idTrk = 0;
        remTrk(idTrk, trkMsgNum);
        spTrk(idTrk);

        end1 = performance.now();
        window.TP = (end1 - start1)/1000;

        trkMsgNum++;
        idTrk++;
    }

    async function chLoad()
    {
        if(loadOrd!=0)
        {
            await loadTrk();
            loadOrd--;
        }
        else
        {
            await sleep(1000);
            await chLoad();
        }
        op3.moveTop(360);
        op3.moveLeft(980);
    }

    var op3 = new operator(document.createElement("img"));
    var trkMsgNum = 0;
    var trkNum = 0;
    var idTrk = 0;
    var reTrk = 0;
    var topPos4 = 350;
    var remBox = 0;

    op3.moveTop(360);
    op3.moveLeft(980);
    await sleep(1000);

    while(true)
    {
        await chLoad();
    }
}