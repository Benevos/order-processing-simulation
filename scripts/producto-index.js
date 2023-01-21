//Arreglos para las variables
var arregloSem = [];
var arregloX = [];
var arregloR = [];

//Numero de etiquetas que se van a crear
var labelnum;
var semilla;
var semilla2;
var D;

//Mide el largo del numero
function len(sem2)
{
    return Math.floor(Math.log10(Math.abs(sem2)))+1
}
  
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

//Obtiene los valores centrales
function medio(sem2)
{
    let sem2Len = len(sem2);
    let sem2Str = sem2.toString();
    let primerc = (sem2Len - D)/2;
    sem2Str = sem2Str.substring(primerc, primerc+D);
    return sem2Str;
}

//Proceso de generacion pseudoleatoria
function generar() 
{ 
    for(let i=0;i<labelnum;i++)
    {
        arregloSem.push("("+semilla+")("+semilla2+") = "+semilla*semilla2);
        let tempSem = semilla2;
        semilla2 = medio(semilla*semilla2, D);
        arregloX.push(semilla2);
        arregloR.push(semilla2 / 10**(D));
        semilla = tempSem;
    }
}

//Crea etiquetas y les asgina un valor
function etiqueta()
{

    var fila1 = [];
    var fila2 = [];
    var fila3 = [];
    
    for(let i=0;i<labelnum;i++)
    {
        let num = []

        //Fila 1
        num[i] = document.createElement("div");
        num[i].setAttribute("class","grid-item");
        num[i].innerHTML = i+". ";
        document.getElementById("grid-contanier").appendChild(num[i]);

        fila1[i] = document.createElement("label");
        fila1[i].setAttribute("class","grid-item")
        fila1[i].innerHTML = arregloSem[i];
        document.getElementById("grid-contanier").appendChild(fila1[i]);


        //Fila 2
        fila2[i] = document.createElement("label");
        fila2[i].setAttribute("class","grid-item")
        fila2[i].innerHTML = arregloX[i];
        document.getElementById("grid-contanier").appendChild(fila2[i]);

        //Fila 3
        fila3[i] = document.createElement("label");
        fila3[i].setAttribute("class","grid-item")
        fila3[i].innerHTML = arregloR[i];
        document.getElementById("grid-contanier").appendChild(fila3[i]);

    }

    //Mide el largo de la semilla y lo imprime
    document.getElementById("D").innerHTML = D;
}

//Comprueba que las semillas sean iguales en cantidad de digitos
async function check()
{
    labelnum = document.getElementById("labelnum").value
    semilla = document.getElementById("semilla").value;
    semilla2 = document.getElementById("semilla2").value;
    D = len(semilla);
    let D2 = len(semilla2);
    if(D != D2)
    {
        alert("Error: La longitud de los numeros debe ser igual.");
    }
    else
    {
        generar();
        etiqueta();
    }
}

async function productosMedios()
{
    if(document.getElementById("rand").checked)
    {
    }
    else
    {
        labelnum = document.getElementById("labelnum").value
        semilla = document.getElementById("semilla").value;
        semilla2 = document.getElementById("semilla2").value;
    }
    D = len(semilla);
    console.log(D);
    let D2 = len(semilla2);
    if(D != D2)
    {
        alert("Error: La longitud de los numeros debe ser igual.");
    }
    else
    {
        generar();
        etiqueta();
    }
}

function checkbox()
{
    if(document.getElementById("rand").checked)
    {
        labelnum = getRandomInt(1, 100)
        semilla = (Math.floor(100000 + Math.random() * 900000));
        semilla2 = (Math.floor(100000 + Math.random() * 900000));

        document.getElementById("labelnum").disabled = true; 
        document.getElementById("semilla").disabled = true;
        document.getElementById("semilla2").disabled = true;

        document.getElementById("labelnum").placeholder = labelnum; 
        document.getElementById("semilla").placeholder = semilla;
        document.getElementById("semilla2").placeholder = semilla2;
    }
    else
    {
        document.getElementById("labelnum").disabled = false; 
        document.getElementById("semilla").disabled = false;
        document.getElementById("semilla2").disabled = false;

        document.getElementById("labelnum").placeholder = "Ingrese la semilla..."; 
        document.getElementById("semilla").placeholder = "Ingrese la semilla...";
        document.getElementById("semilla2").placeholder = "Ingrese el numero de variables...";
    }
}