class box
{
    constructor(type, id)
    {
        this.type = type;
        this.id = id;
        type.setAttribute("id","box"+id);
        type.style.position = "absolute";
        type.style.height = "25px";
        type.style.width = "25px";
        document.getElementById("body").appendChild(this.type);
    }

    setImage(path)
    {
        this.type.src = path;
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

async function crearBox(boxId)
{   
    boxes[window.boxI] = new box(document.createElement("img"),boxId);
    boxes[window.boxI].setImage("/modelos/caja_1.png")

    if(window.posBox == 0)
    {
        boxes[window.boxI].moveTop(210);
        window.posBox++;
    }
    else if(window.posBox == 1)
    {
        boxes[window.boxI].moveTop(230);
        window.posBox++;
    }
    else if(posBox == 2)
    {
        boxes[window.boxI].moveTop(250);
        window.posBox = 0;
    }
    
    boxes[window.boxI].moveLeft(840);
}

// box1.moveTop(220);
// box1.moveLeft(840);