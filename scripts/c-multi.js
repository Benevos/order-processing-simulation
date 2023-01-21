//Arreglos para las variables
var arregloX = [];
var arregloR = [];

//Numero de etiquetas que se van a crear
var labelnum;

var a_tipo, k, g, a, m;
  
//Proceso de generacion pseudoleatoria
function generar() 
{  
    labelnum = document.getElementById("labelnum").value;
    a_tipo = document.getElementById("a").value;
    k = document.getElementById("k").value;
    g = document.getElementById("g").value;

    var semilla = document.getElementById("semilla").value;
    var resX, resR;

    if(a_tipo == 0)
    {
        a = 3+8*k
    }
    else
    {
        a = 5+8*k
    }

    m = Math.pow(2,g);
    for(let i=0;i<labelnum;i++)
    {
        resX = ((a*semilla)%m);
        arregloX.push("("+a+" * "+semilla+")mod"+m+" = "+resX);
        semilla = resX;
        resR = resX/(m-1);
        arregloR.push(""+resX+"/"+(m-1)+" = "+resR.toFixed(4));
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

        if(a_tipo == 0)
        {
            document.getElementById("a-res").innerHTML = "3 + 8("+k+") = "+a;
        }
        else
        {
            document.getElementById("a-res").innerHTML = "5 + 8("+k+") = "+a;
        }

        document.getElementById("m-res").innerHTML = "2^"+g+" = "+m;

        //Fila 1
        num[i] = document.createElement("label");
        num[i].innerHTML = (i+1)+". ";
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
