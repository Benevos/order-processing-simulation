//*Variables globales

//Contadores
var i = 0;
var penOrd = 0;
var packOrd = 0;
var loadOrd = 0;
var subMsgOrd = 0;
var totalMsg = 0;

var genMsg = 0;
var genPen = 0;
var genFin = 0;

var TP;
var TP2;

var start2, end2;

var cond1 = true;
var cond2 =  true;

//Indices
var merI = 0; //?window
var boxI = 0; //?window
var posMer = 0; //?window
var posBox = 0; //?window

//Arreglos
var mers = [];
var boxes = [];
var msgs = [];
var trkMsg = [];
var trks = [];
var subMsg = [];

var play = true;
var modalC;

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reproducir()
{
    if(play)
    {
        play = false;
        var numMsg = 0;
        var msgId = 0;

        //abrir();

        await productosMedios(); //genracion de productos medios
        chron();
        
        //Si el numero es par se genera una orden
        for(let y=0;y<window.arregloX.length;y++)
        {
            if(window.arregloX[y]%2 == 0)
            {
                genMsg++;
            }
        }
        
        //Redondea el numero de ordenes generadas
        if(genMsg == 0) genMsg++;
        if(genMsg%3 != 0) genMsg++;
        if(genMsg%3 != 0) genMsg++;

        Ordgeneradas();
        Ordpendientes();
        Ordfin();

        async function crearMsg()
        {
            while(numMsg<genMsg)
            {
                totalMsg++;
                if(true)
                {
                    numMsg++;
                    await mensajes(msgId);
                    msgId++;
                    i++;
                }
            }
        }

        crearMsg();
        crearTrk();
        operador1(); //! Dentro de este metodo se estan creando las cajas y mercancia
        operador2(); //! Aqui se elimina mercancia
        operador3(); //! Se crean menasajes de los camiones
        finSimul();
    }
    else
    {
        alert("Error: recargue la pagina para reinciar la simualcion.")
    }
}

async function Ordgeneradas()
{
    document.getElementById("ordGen").innerHTML = window.genMsg;
}

async function Ordpendientes()
{
    document.getElementById("ordPro").innerHTML = window.genPen;
    await sleep(1000);
    Ordpendientes();
}

async function Ordfin()
{
    document.getElementById("ordFin").innerHTML = window.genFin;
    await sleep(1000);
    Ordfin();
}

function abrir()
{ 
    modalC = document.getElementById("modal-container");  
    modalC.classList.add("show");
    crGrid();
}

function cerrar()
{
    modalC = document.getElementById("modal-container");  
    modalC.classList.remove("show");
}

function crGrid()
{
    new gridjs.Grid({
        height: 315,
        width: 500,
        pagination: {limit:5},
        columns: ["Variable", "Valor"],
        data: [
          ["Ordenes generadas", genMsg,],
          ["Ordenes finalizadas", genFin],
          ["Cargueros desplegdos", (genMsg/3)],
          ["Timepo promedio de procesado", TP2.toFixed(4)+" segundos"],
          ["Timepo en centro de distribucion", TP.toFixed(4)+" segundos"],
          ["Tiempo promedio de devolucion de carguero", "25 segundos"]
        ]
      }).render(document.getElementById("grid"));
}

async function finSimul()
{
    await sleep(25000)
    if(window.genMsg == window.genFin)
    {
        if(confirm("La simulacion ha termiando. ¿Imprimir resultados?"))
        {
            abrir();
        }
    }
    else
    {
        finSimul();
    }
}