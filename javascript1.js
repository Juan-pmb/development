/*alert("Hola a todos");


let saludo = "Buenos días"
let tiempo = 4;
if (tiempo > 3) {
    let hola ="Hola  como están todos";
    alert(hola);
}

alert(hola); */

// var numero = 3
// numero = numero + 5
// alert(numero)

// if (true) {
//     let x=6;
// }
// alert(x);

//Conversión de una cadena en número

// var primero, segundo, tercero;

// primero = prompt("Introduzca el primer número: ")
// segundo = prompt("Introduzca el segundo número : ")
// resultado = primero + segundo
// alert(resultado)

// var num = 4;
// ++num;
// alert(num)

// let valor1
// let valor2

// valor1 = prompt("Introduzca el primer número")
// valor2 = prompt("Introduzca el segundo número")
// let suma = parseInt(valor1)+parseInt(valor2)
// let producto = parseInt(valor1) * parseInt(valor2)
// alert("La suma es: " + suma)
// alert("El producto es: " + producto)

// document.write("Bienvenido, su suma es: " + suma)
// document.write("Bienvenido, su producto es: " + producto)

// let resta = parseInt(valor1) - parseInt(valor2)
// let division = parseInt(valor1) / parseInt(valor2)

// alert("La resta es: " + resta)
// alert("La división es: " + division)

// document.write(`El producto es: ${producto} <br> la suma es: ${suma}`)

// let edad  = prompt("Introduzca su edad: ")
// let nombre = prompt("Introduzca su nombre: ")

// parseInt(edad);

// if (edad >= 18 ) {
//     document.write(`Eres mayor de edad, tienes: ${edad} años. <br> Tu nombre es: ${nombre}`)    
// }
// else{
//     document.write(`Eres menor de edad, tienes: ${edad} años. <br> Tu nombre es: ${nombre}`)    
// }


// const edad = 18
// if (edad < 18) {
//     document.write("Eres menor edad ")
// }else if (edad >= 18 && edad <= 21) {
//     document.write("Tu edad está entre 18 y 21 años de edad ")
// }else {
//     document.write("Tienes más de 21 años. ")
// }


// const mascota = "perro"
// const mascota2 = "gato"
// const mascota3 = "loro"

// if (mascota === "Lagarto") {
//     document.write("Tengo un lagarto...")
// } else if (mascota2 === "gato") {
//     document.write("Tengo un gato")
// }else if (mascota2 === "perro" ) {
//     document.write("No tengo un gato")
// }else {
//     document.write("No sé que tienes")
// }


// let sueldo;

// sueldo = parseFloat(prompt("Ingrese el suelo del empleado"));

// if(sueldo >= 2000000) {
//     document.write("Como el sueldo es de " + sueldo + " debe abonar impuestos...");
// }else {
//     document.write("No debes pagar impuestos");
// }


// let nota1, nota2, nota3;
// nota1 = prompt("Ingrese la primera nota");
// nota2 = prompt("Ingrese la segunda nota");
// nota3 = prompt("Ingrese la tercera nota");

// //Convertir los 3 primeros strings en enteros.
// nota1 = parseFloat(nota1);
// nota2 = parseFloat(nota2);
// nota3 = parseFloat(nota3);

// let promedio;

// promedio = (nota1 + nota2 + nota3) /3;

// if (promedio >= 3.5) {
//  document.write("El aprendiz aprobó")   
// }else if (promedio >= 2) {
// document.write("Aprendiz para comité");
// } else {
//     document.write("Reprobado");
// }


// let dia, mes, anio;
// dia = parseInt("Ingrese el día");
// mes = parseInt("Ingrese el mes");
// anio = parseInt("Ingrese el año");

// if (mes == 1 || mes == 2  || mes == 3) {
//     document.write("El mes ingresado correspone al primer trimestre del año. ");
// }


// var i=1;
// while (i<10) {
//     alert("Vas en el número: " + i);
//     i++; //contador
// }



// var contador;
// for (contador =1; contador <= 5; contador++) {
//     alert("Ahora el contador tiene el valor de: " + contador);
// }


// //Do While
// let x = 11;

// do {
//     alert(x);
//     x++;
// } while (x <= 10);



//Switch 

// opc = parseInt(prompt("Ingrese una opcion de 1 a 2"));
// switch (opc) {
//     case 1:
//         alert("Hola Mundo");
//              break;

//         case 2:
//               alert("Hola galaxia");
//                  break;
//     default:
//         alert("No es ni la opcion 1 ni la 2");
// // }

// for(var i = 0; i < 8; i++) {
//     alert(i);
// }



// let suma, resta, multiplicacion, division;
// let num1, num2;
// num1 = parseInt(prompt("Ingrese el primer dato"));
// num2 = parseInt(prompt("Ingrese el segundo dato"));


// suma = parseInt();
// resta = parseInt();
// division = parseInt();
// multiplicacion = parseInt();


// let opc;
// opc = parseInt(prompt("Que operación deseas hacer? (1. SUMA / 2. RESTA / 3.MULTIPLICACION / 4.DIVISIÓN"));

// switch (opc) {
//     case 1:
//         suma = num1 + num2;
//         document.write("La suma es: " + suma);

//         break;

//     case 2:
//         resta = num1 - num2;
//         document.write("La resta es: " + resta);

//         break;

//     case 3:
//         multiplicacion = num1 * num2;
//         document.write("La multiplicacion es: " + multiplicacion);

//         break;

//     case 4:
//         division = num1 / num2;
//         document.write("La division es: " + division);

//         break;
    
//     default:
//         alert("Digite 2 datos numericos y seleccione la opción correcta para hacer el calculo...")
//         break;
// }



// let nota1, nota2, nota3, nota4, media;

// nota1 = parseInt(prompt("Ingrese la primera nota: "));
// nota2 = parseInt(prompt("Ingrese la segunda nota: "));
// nota3 = parseInt(prompt("Ingrese la tercera nota: "));

// media = (nota1 + nota2 + nota3 + nota4) /4;

// if(media > 3) {
//     alert("Aprobastre con una nota de: " +  media);
// }else {
//     alert("Reprobaste con una nota de: " +  media);
// }

//Realiza un programa donde se evalue la edad de una persona; 
//en caaso de que sea mayor de edad diga que piede conducir un vehiculo
//sino diga que aun es demasiado joven.
// let nombre, edad;

// nombre = prompt("Ingrese su nombre")
// edad = parseInt(prompt("Ingrese la edad: "))


// if (edad >= 18 ) {
//     alert("Puedes conducir un vehiculo...")
// }else {
//     alert("Aún eres demasiado joven...")
// }

//Construir un programa que permita segun el tipo de animal
//determinar si es un mamifero, un reptil o un arácnido


// let tipoAnimal = ["zorro " + " perro " + " cocodrilo " + " serpiente " + " araña "]

// document.write("Estos son los animales, elige uno de ellos: ")
// document.write(tipoAnimal)

// tipoAnimal = prompt("Digite su animal: ")

// switch (tipoAnimal) {
//     case 'zorro':
//         document.write("Este es un animal de tipo 'Mamifero' ")
//         break;

//         case 'perro':
//             document.write("Este es un animal de tipo 'Mamifero' ")
//             break;

//             case 'cocodrilo':
//                 document.write("Este es un animal de tipo 'Reptil' ")
//                 break;

//                 case 'serpiente':
//                     document.write("Este es un animal de tipo 'Reptil' ")
//                     break;

//                     case 'araña':
//                         document.write("Este es un animal de tipo 'Aracnido' ")
//                         break;

//     default:
//         break;
// }


// let nomProducto, valProducto, impuestos
// impuesto = parseInt()

// nomProducto = prompt("Ingrese el nombre del producto")
// valProducto = parseFloat(prompt("Ingrese el valor del producto"))

// let iva = 0.19

//  if (valProducto >= 100000) {
//     impuestos = valProducto * iva + valProducto
//  }else if (valProducto < 100000) {
//     impuestos = valProducto - iva 
//  }

//  alert(impuestos)







 