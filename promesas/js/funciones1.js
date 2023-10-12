const buscarCliente = (datos) =>{

        const documentos = [1010, 1011, 1012, 1013, 1014]
        const nombres = ['Carmen', 'Ines', 'Juan', 'Daniela', 'Maria']
        let encontrado = false
        let nombreEncontrado ='';

        for(let i=0; i<documentos.length; i++){
            if(datos == documentos[i]){
               encontrado = true
               nombreEncontrado = nombres[i];
               break;
            }
        }
        return new Promise((resolve, reject) =>{
                if(encontrado) {
                    resolve('Dato encontrado '+ nombreEncontrado);
                } else {
                    reject('Dato no encontrado')
                }
        })
}

document.querySelector('#btnBuscar')
.addEventListener('click', 
()=>buscarCliente(document.getElementById('datos').value)
.then(mensaje => console.log(mensaje))
.cath(error => console.log(error))
)