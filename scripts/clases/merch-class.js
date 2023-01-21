class merch
{
    constructor(type, id)
    {
        this.type = type;
        this.id = id;
        type.setAttribute("id","mer"+id)
        type.src = "/modelos/pila.png";
        type.style.position = "absolute";
        type.style.height = "25px";
        type.style.width = "25px";
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

async function crearMerch(merId)
{   
    mers[window.merI] = new merch(document.createElement("img"), merId);
    
    if(window.posMer == 0)
    {
        mers[window.merI].moveTop(210);
        window.posMer++;
    }
    else if(window.posMer == 1)
    {
        mers[window.merI].moveTop(230);
        window.posMer++;
    }
    else if(window.posMer == 2)
    {
        mers[window.merI].moveTop(250);
        window.posMer = 0;
    }
    
    mers[window.merI].moveLeft(950);
}