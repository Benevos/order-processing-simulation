//Arreglos para las variables
var arregloSem = [];
var arregloX = [];
var arregloR = [];

//Numero de etiquetas que se van a crear
var labelnum;
var D;

//Mide el largo del numero
function len(sem2)
{
    return Math.floor(Math.log10(Math.abs(sem2)))+1
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
    labelnum = document.getElementById("labelnum").value
    var semilla = document.getElementById("semilla").value;
    var constante = document.getElementById("constante").value;

    for(let i=0;i<labelnum;i++)
    {
        arregloSem.push("("+semilla+")("+constante+") = "+semilla*constante);
        semilla = medio(semilla*constante, D);
        arregloX.push(semilla);
        arregloR.push(semilla / 10**(D));
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

        let br1 = document.createElement("br");
        let br2 = document.createElement("br");
        let br3 = document.createElement("br");

        //Fila 1
        num[i] = document.createElement("label");
        num[i].innerHTML = i+". ";
        document.getElementById("fila-1").appendChild(num[i]);

        fila1[i] = document.createElement("label");
        fila1[i].innerHTML = arregloSem[i];
        document.getElementById("fila-1").appendChild(fila1[i]);

        document.getElementById("fila-1").appendChild(br1);

        //Fila 2
        num[i] = document.createElement("label");
        num[i].innerHTML = (i+1)+". ";
        document.getElementById("fila-2").appendChild(num[i]);

        fila2[i] = document.createElement("label");
        fila2[i].innerHTML = arregloX[i];
        document.getElementById("fila-2").appendChild(fila2[i]);

        document.getElementById("fila-2").appendChild(br2);

        //Fila 3

        num[i] = document.createElement("label");
        num[i].innerHTML = (i+1)+". ";
        document.getElementById("fila-3").appendChild(num[i]);

        fila3[i] = document.createElement("label");
        fila3[i].innerHTML = arregloR[i];
        document.getElementById("fila-3").appendChild(fila3[i]);

        document.getElementById("fila-3").appendChild(br3);
    }

    //Mide el largo de la semilla y lo imprime
    let semilla = document.getElementById("semilla").value;
    semilla = len(semilla);
    document.getElementById("D").innerHTML = semilla;
}

//Comprueba que las semillas sean iguales en cantidad de digitos
function check()
{
    D = len(document.getElementById("semilla").value);
    let D2 = len(document.getElementById("constante").value);
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