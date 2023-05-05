const createButton = document.getElementById('crear');
createButton.addEventListener("click", crearProducto);

const obtenerToken = () => localStorage.getItem('token')

const obternerProductos = async () => {
    const headersList = {
        "Accept": "*/*",
    }
    
    const response = await fetch(`/api/productos?token=${obtenerToken()}`, { 
        method: "GET",
        headers: headersList
    });

    let body;
    switch (response.status) {
        case 401:
        case 403:
            localStorage.removeItem("token")
            window.location = '/'
            break;
        case 200:
            const {productos} = await response.json();
            return productos
        default:
            body = await response.json();
            alert(body.error);
            location.reload();
            break;
    }
}
 

async function crearProducto() {

    const url = "/api/productos";
    const nombreElement = document.getElementById('nombre');
    const nombre = nombreElement.value;

    const precioElement = document.getElementById('precio');
    const precio = precioElement.value;

    const imagenElement = document.getElementById('imagen');
    const imagen = imagenElement.value;

    const cantidadElement = document.getElementById('cantidad');
    const cantidad = cantidadElement.value;

    const token = localStorage.getItem('token')
    const data = { nombre, precio, imagen, cantidad }

    const fetchConfig = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }

    const response = await fetch(url, fetchConfig)

    let body;
    switch (response.status) {
        case 401:
        case 403:
            localStorage.removeItem("token")
            window.location = '/'
            break;
        case 200:
            location.reload();
            break;
        default:
            body = await response.json();
            alert(body.error);
            location.reload();
            break;
    }
}
const mostrarProductos = (productos) => {
    
    const tabla = document.getElementById('tabla')

    productos.forEach(producto => {
        
        const row = document.createElement('tr')
        const nombre = document.createElement('td')
        nombre.textContent = producto.nombre;
        const precio = document.createElement('td')
        precio.textContent= producto.precio;
        const contImagen = document.createElement('td')
        const imagen = document.createElement('img')
        imagen.setAttribute('src', producto.imagen )
        imagen.setAttribute('width', 200 )
        const cantidad = document.createElement('td')
        cantidad.textContent = producto.precio

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(contImagen);
        contImagen.appendChild(imagen)
        row.appendChild(cantidad);
        tabla.appendChild(row)
    });

    

}

async function load() {
    setNavBarToken()
    const productos =  await obternerProductos()
    mostrarProductos(productos)
    
}

