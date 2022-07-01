// CAJERO AUTOMÁTICO

let cliente1 = ["Paola", 1798, "girl123", 600] // Arreglo
let cliente2 = ["Oscar", 6709, "boy1789", 900] // Arreglo
let cliente3 = ["Luis", 5025, "awesome22", 700] // Arreglo
let usuarios = [cliente1, cliente2, cliente3]
let userValido;



function validar() {
    let usuario = document.getElementById("user").value
    let contraseña = document.getElementById("password").value




    let userValido = usuarios.find((user) => (user[0]) == usuario)
    console.log(userValido)
    if (userValido != undefined) {
        if (userValido[2] == contraseña) {
            console.log("Login Succes")
            let btn = document.getElementById('section-btn')
            btn.classList.remove('oculto')
            document.getElementById('caj').style.display = 'none';
        }
        else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Por favor, ingresa los Datos Correctos.')
    }


    if (usuario == usuarios[0][0]) {
        document.getElementById('montocantidad').value = (usuarios[0][3]);
    } else if (usuario == usuarios[1][0]) {
        document.getElementById('montocantidad').value = (usuarios[1][3]);
    } else if (usuario == usuarios[2][0]) {
        document.getElementById('montocantidad').value = (usuarios[2][3]);
    }

    let logout1 = document.getElementById("Salir")
    logout1.classList.remove('logout')

}



let total;
function depositar() {
    let montoTotal = parseInt(document.getElementById('montocantidad').value);
    let inmonto = parseInt(document.getElementById('deposito').value);
    // validar que el monto + balance no supere los 990
    if ((inmonto + montoTotal) >= 990) {
        mostrarError('No puedes tener mas de 990 en tu cuenta.')
    } else {
        total = inmonto + montoTotal;
        document.getElementById('montocantidad').value = (total);
    }
}

function retirar() {
    let montoTotal = parseInt(document.getElementById('montocantidad').value);
    let inretiro = parseInt(document.getElementById('retiro').value);
    // validar si cuento con los fondos suficientes para retirar un monto
    if (inretiro >= montoTotal) {
        mostrarError('No puedes retirar mas de lo que tienes en tu cuenta.')
    } else if ((montoTotal - inretiro) < 10) {
        mostrarError('Debes de dejar por lo menos 10 pesos en tu cuenta.')
    } else {
        total = montoTotal - inretiro;
        document.getElementById('montocantidad').value = (total);
    }
}

function mostrarError(mensaje) {
    alert(mensaje)
}


let backsect = document.getElementById('btnregresar')

function back(){
    let capa = document.getElementById('caj')
    document.getElementById(capa).style.display = 'flex';
}



