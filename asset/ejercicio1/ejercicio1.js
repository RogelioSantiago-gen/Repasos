"use stric";

/* var number6 = 78;

var number3 = 155;

document.write(number3 + number6);



 */

//resta 
/* 
var number = 500;
var number1 = 1500;

document.write(number1 - number);
 */

//OPERADORES DE COMPARACION
/* 
let valor1 = 67;
valor1 == 65;
console.log(valor1); */

// FUNCIONES SIN PARAMETROS
/* 
function division(){
    let resultado = 81 / 9;
    console.log(resultado);

}

division(); */

//Funciones con parametros

/* function suma(numero1, numero2, numero3){
    let resultado = numero1 + numero2 + numero3;
    console.log(resultado)
}

suma(100, 55, 5);
 */

// CONDICIONALES IF, ELSE IF, ELSE

//IF

/* Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:

En caso afirmativo el usuario responderá si
En caso contrario responderá no.
Si el usuario responde si se escribirá por el documento «irás a la cárcel».

Si el usuario responde no se escribirá por el documento web «irás a casa».

En cualquier caso en el documento web se escribirá «la documentación por favor» */
	

/* var culpable = window.prompt("¿eres culpable?"); // si, no

	if(culpable=="si"){
		document.write("irás a la cárcel");
	}else if(culpable=="no"){
		document.write("irás a casa");
	}else{
		document.write("la documentación por favor");
	}
 */

 /* Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).

 */


/* var helado = window.prompt("¿Que topping vas a llevar?");

var ST = 1.90;
var TO = 1;
var TKK = 1.50;
var TB = 0.75;
var TLC = 0.95;




if(helado==="sin topping"){

    document.write("su costo es de " + st + " euros");

}

if(helado==="topping de oreo"){

    document.write("su costo es de " + TO + " euros");

}

if(helado==="topping de kit kat"){

    document.write("su costo es de " + TKK + " euros");

}
if(helado==="topping de brownie"){

    document.write("su costo es de " + TB + " euros");

}
if(helado==="topping de lacasitos"){

    document.write("su costo es de " + TLC + " euros");

}


if(helado==="topping de carlos v"){
    document.write("no tenemos este topping, lo sentimos.");
}
 */
/* 
var topping = window.prompt("qué topping quieres");
		var precio = 0.00;
		var helado = 1.90;
		var precioFinal = 0.00;

		if(topping=="oreo"){
			precio = 1;
		}else if(topping == "kitkat"){
			precio = 1.50;
		}else if(topping == "brownie"){
			precio = 0.75;
		}else  if(topping == "lacasitos"){
			precio = 0.95;
		}else{
			document.write("no tenemos este topping, lo sentimos. ");
			precio = 0;
		}

		precioFinal = helado;
		document.write("el helado cuesta " + precioFinal + " €");
 */