

/* Recibes la tarea de construir un sistema de alarma para una fábrica de champús. 
Tu sistema recibe las siguientes variables: temperatura ambiente, humedad ambiental, 
número de trabajadores en la planta y nivel de líquido en los tanques.
La alarma debe sonar siempre que la temperatura ambiente sea superior o inferior a los umbrales,
si la humedad es superior al 50%, si hay más de 100 trabajadores en la planta al mismo tiempo,
 o si el nivel del líquido es superior al 90% (para evitar el desbordamiento).

 umbral superior 90% umbral inferior 30%
 */



var humedad = 0;

var liquido = 0;

var trabajadores = 0;

var ambiente = 0;

/* <= */
function recibir() {
    let formulario = document.forms[`formulario`];

    var x = formulario[`ambiente`];
    var y = formulario[`liquido`];
    var z = formulario[`trabajadores`];
    var w = formulario[`humedad`];

    humedad = parseInt(w.value);
    
    liquido = parseInt(y.value);
    
    trabajadores = parseInt(z.value);
    
    ambiente = parseInt(x.value);

    console.log(ambiente,liquido,trabajadores,humedad);
    
}

function alerta (ambiente,liquido,trabajadores,humedad){

    if (ambiente <=30 || ambiente >=90){
        alert("falla de temperatura");
    }

    }
