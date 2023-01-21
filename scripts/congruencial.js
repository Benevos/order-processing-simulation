//Arreglos para las variables
var arregloX = [];
var arregloR = [];

//Numero de etiquetas que se van a crear
var labelnum;
  
//Proceso de generacion pseudoleatoria
function generar() 
{  
    labelnum = document.getElementById("labelnum").value;
    var semilla = document.getElementById("semilla").value;
    var constA = document.getElementById("const-a").value;
    var constC = document.getElementById("const-c").value;
    var mod = document.getElementById("mod").value;

    constC = parseInt(constC); //Se desconoce porque constC se guarda en string, pero para eso se hace este parseo

    for(let i=0;i<labelnum;i++)
    {
        let res = (constA*semilla+constC)%100;
        arregloX.push("("+constA+"*"+semilla+"+"+constC+")mod"+mod+" = "+res);
        semilla = res;
        arregloR.push(semilla+"/"+99+" = "+(semilla/99).toFixed(4));
    }
}

//Crea etiquetas y les asgina un valor
function etiqueta()
{
    var fila1 = [];
    var fila2 = [];
    
    for(let i=0;i<labelnum;i++)
    {
        let num = []

        let br1 = document.createElement("br");
        let br2 = document.createElement("br");

        //Fila 1
        num[i] = document.createElement("label");
        num[i].innerHTML = i+". ";
        document.getElementById("fila-1").appendChild(num[i]);

        fila1[i] = document.createElement("label");
        fila1[i].innerHTML = arregloX[i];
        document.getElementById("fila-1").appendChild(fila1[i]);

        document.getElementById("fila-1").appendChild(br1);

        //Fila 2
        num[i] = document.createElement("label");
        num[i].innerHTML = (i+1)+". ";
        document.getElementById("fila-2").appendChild(num[i]);

        fila2[i] = document.createElement("label");
        fila2[i].innerHTML = arregloR[i];
        document.getElementById("fila-2").appendChild(fila2[i]);

        document.getElementById("fila-2").appendChild(br2);
    }
}
