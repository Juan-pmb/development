// validarContacto = () => {
//     //Validar campos vacios
//     let username = document.querySelector('#username');

//     let contraseña = document.querySelector('#contraseña');

//     if (username.value.length == "" && username.value.length) {
//         Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'El correo electrónico está vacio',
//             showConfirmButton: false,
//             timer: 2000
//         })
//     } else if (contraseña.value.length == "") {
//         Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'La contraseña está vacia',
//             showConfirmButton: false,
//             timer: 20000
//         });
//     }
    
//     console.log(username.value);

//     console.log(contraseña.value);
// }


// //Capturar el objeto al cual se le dará click
// const btnEnviar = document.querySelector('#btnEnviar');

// //Escuchar eventos del botón
// btnEnviar.addEventListener('click', validarContacto)


function Login(username, password) {
    return new Promise((resolve, reject) => {
    
      if (username === "admin" && password === "password") {
        resolve("¡Inicio de sesión exitoso!");
      } else {
        reject("Revisa tus datos, ha ocurrido un error...");
      }
    });
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const resultado = document.getElementById("resultado");
  
    Login(username, password)
      .then((message) => {
        resultado.textContent = message;
      })
      .catch((error) => {
        resultado.textContent = error;
      });
  });