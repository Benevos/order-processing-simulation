//Arreglos para las variables
var arregloX = [];
var arregloR = [];


var labelnum; //Numero de etiquetas que se van a crear
var sem //Arreglo que contiene las semillas separadas
var semLen;
  
//Proceso de generacion pseudoleatoria
function generar() 
{  
    var mod = document.getElementById("mod").value;
    labelnum = document.getElementById("labelnum").value;

    let semStrJoin = document.getElementById("semStr").value; //Semillas unidas en string
    semStr = semStrJoin.split(" "); //Semillas separadas en arreglo, pero son String

    //Convierte todos los elementos del arreglo en integer
    sem = semStr.map 
    (
        function(x)
        {
            return parseInt(x,10);
        }
    );
    semLen = sem.length;
    
    var resX, resR;

    for(let i=0;i<labelnum;i++)
    {
        let semLen = sem.length;
        resX = (sem[semLen-1]+sem[i])%mod
        sem.push(resX);
        arregloX.push("("+sem[semLen-1]+" + "+sem[i]+")mod"+mod+" = "+resX);
        resR = resX/(mod-1);
        arregloR.push(""+resX+"/"+(mod-1)+" = "+resR.toFixed(4));
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
        if(i==0)
        {
            num[i].innerHTML = (semLen+1)+". ";
        }
        else
        {
            semLen++;
            num[i].innerHTML = (semLen+1)+". ";
        }
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
