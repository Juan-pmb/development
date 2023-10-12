proceso1 = async() => {
    let suma1 = 0;
    return new Promise((resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 5000; i++) {
            suma1 += i;
        } resolve(`Proceso 1: La suma es ${suma1}`)
}, 5000)) // 5 seconds

}

proceso2 = async() => {
    let suma1 = 0;
    return new Promise((resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 20000; i++) {
            suma1 += i;
        } resolve(`Proceso 2: La suma es ${suma1}`)
}, 8000)) // 8 seconds

}

proceso3 = async() => {
    let suma1 = 0;
    return new Promise((resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {
            suma1 += i;
        } resolve(`Proceso 3: La suma es ${suma1}`)
},3000)) // 3seconds

}

document.querySelector('#btnBuscar')
.addEventListener('click', () => {
    proceso1().then(mensjae => console.log(mensjae))
    proceso2().then(mensjae => console.log(mensjae))
    proceso3().then(mensjae => console.log(mensjae))

})


function proceso3(callback) { 

    let suma1 = 0;
    return new Promise((resolve,reject) => setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {
            suma1 += i;
        } resolve(`Proceso 3: La suma es ${suma1}`)
},3000)) // 3seconds


}

//dilopezz@sena.edu.co

/*Convertir el anterior código a funciones sincrónicas
sin promesas y sin el async */ 

/*Dadas 4 listas de documentos implementar una función async por cada lista para buscar un documento
Si el documento está, devolver el encontrado. Imprimir el mensaje */


/*Compartir un repositorio de git con los talleres de repaso al email: dilopezz@sena.edu.co */