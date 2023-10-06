// TALLER EVALUATIVO - JUAN ESTEBAN ORTIZ JARAMILLO, FICHA: 2670689

// 1.  El SENA requiere saber para una mascota ingresada con varios datos (nombre,
//     raza, peso, edad), si tiene más de 5 años, se genere una alerta de “Ambiente
//     especial”, en caso contrario una alerta de “Ambiente ordinario”.

// let nombre, raza, peso, edad

// nombre = prompt("Ingrese el nombre de la mascota")
// raza = prompt("Ingrese la raza")
// peso = parseInt(prompt("Ingrese el peso"))
// edad = parseInt(prompt("Ingrese la edad"))

// if (edad<5) {
//     alert ("Ambiente Ordinario")
//     alert("Nombre: "+nombre+"\n"+"Raza: "+raza+"\n"+"Peso: "+"Edad: "+edad+"\n")
    
// }else{
//     alert ("Ambiente Especial")
//     alert("Nombre: "+nombre+"\n"+"Raza: "+raza+"\n"+"Peso: "+peso+"\n"+"Edad: "+edad+"\n")
// }

//---------------------------------------------------------------------------------------

// 2. Construye un programa que permita generar los números del 2 al 20.

// for (var i=2; i<=20; i++) {
//     alert(i)  
// }

//---------------------------------------------------------------------------------------

// 3. Se ingresa por teclado los datos de un empleado (documento, nombre, apellido,
//     correo, teléfono, salario (se puede ingresar un valor con decimales)), si el empleado
//     gana un salario de 1160000 regalarle un subsidio del 20%, si gana más de
//     3000000, generar una retención en la fuente del 16%. Imprimir los datos al final.

// let nombre, apellido, documento, corre,telefono,salario, correo

// nombre = prompt("Ingrese el nombre del empleado")
// apellido = prompt("Ingrese el apellido del empleado")
// documento = prompt("Ingrese el documento del empleado")
// correo = prompt("Ingrese el correo del empleado")
// telefono = prompt("Ingrese el telefono del empleado")
// salario = parseInt(prompt("Ingrese el salario del empleado"))


// if (salario==1160000) {
//     let subsidio=parseFloat=salario*0.20
//     let totalSalario=parseFloat=salario+subsidio

//     alert("Nombre: "+nombre+"\n"+"Apellido: "+apellido+"\n"+"Documento: "+documento+"\n"+"Correo: "+correo+"\n"
//     +"Telefono: "+telefono+"\n"+"Salario Total: "+totalSalario)

// }else if (salario>3000000){
//     let subsidio=parseFloat=salario*0.16
//     let totalSalario=parseFloat=salario-subsidio

//     alert("Nombre: "+nombre+"\n"+"Apellido: "+apellido+"\n"+"Documento: "+documento+"\n"+"Correo: "+correo+"\n"
//     +"Telefono: "+telefono+"\n"+"Salario Total: "+totalSalario)

// }

//---------------------------------------------------------------------------------------

// // 4. Crea una aplicación que calcule la suma, resta, multiplicación y división de dos
// // números solicitados al usuario, y muestre al final los resultados.

// let num1,num2, resultado

// num1=parseInt(prompt("Ingrese el numero 1"))
// num2=parseInt(prompt("Ingrese el numero 2"))

// let suma=parseFloat=num1+num2
// let resta=parseFloat=num1-num2
// let multi=parseFloat=num1*num2
// let div=parseFloat=num1/num2

// alert ("Suma: "+suma+"\n"+"Resta: "+resta+"\n"+"Multiplicación: "+multi+"\n"+"División: "+div+"\n")

//---------------------------------------------------------------------------------------

// 5. El SENA requiere saber para un aprendiz ingresado, para el promedio de 4 notas, si
// la nota es mayor a 3,5 se genere una alerta de “Aprobado”, en caso contrario “No
// Aprobado”.

// let n1,n2,n3,n4,resul

// n1=parseFloat(prompt("Ingrese la nota 1"))
// n2=parseFloat(prompt("Ingrese la nota 2"))
// n3=parseFloat(prompt("Ingrese la nota 3"))
// n4=parseFloat(prompt("Ingrese la nota 4"))

// resul=parseFloat=(n1+n2+n3+n4)/4

// if (resul<3.5) {
//     alert("No Aprobado, su nota final es: "+ resul)
    
// }else{
//     alert("aprobado, su nota final es: "+ resul)
// }

// ---------------------------------------------------------------------------------------

// 6. Desarrolla un programa que permita generar un certificado de vacunación, si una
// persona tiene aplicada 4 dosis de una vacuna contra el COVID.

// let numVacuna

// numVacuna=parseInt(prompt("Ingrese el numero de vacuna"))

// if (numVacuna!=4) {

//     alert("Certificado no generado")
    
// }else{
//     alert("Certificado generado")
// }


