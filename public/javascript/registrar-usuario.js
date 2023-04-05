
const registrarUsuario = document.getElementById('registrarUsuario');
registrarUsuario.addEventListener("click", guardarUsuario)


async function guardarUsuario() {
    const url = "/user";
    const datoIngresado = {
        name: document.getElementById('nameUsuario').value,
        lastname: document.getElementById('lastnameUsuario').value,
        age: document.getElementById('edadUsuario').value,
        phone: document.getElementById('phoneUsuario').value,
        email: document.getElementById('emailUsuario').value,
        password: document.getElementById('passwordUsuario').value,
        address: document.getElementById('addressUsuario').value,
        city: document.getElementById('cityUsuario').value,
        country: document.getElementById('countryUsuario').value
    }

    const objetoUsuario = datoIngresado;
               
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(objetoUsuario),
            headers:{
                'Content-Type': 'application/json',
                
            }
        }
    
        const response = await fetch(url, fetchConfig)
    
        let body;
        
        switch (response.status) {
            case 401:
            case 403:
                window.location = '/';
                break;
            case 200:
                body= await response.json();
                alert(body.message);
                window.location = '/';
                break;
            default:
                body = await response.json();
                alert(body.error);
                // location.reload();
                break;
        }
}

document.getElementById("btn-inicio-sesion").addEventListener("click", irlogin)

function irlogin() {
    window.location = "/"

}