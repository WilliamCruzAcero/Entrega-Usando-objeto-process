const axios = require('axios');

const login = async() => {
    try {
        const headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json" 
        }
           
        const bodyContent = JSON.stringify({
            "email": "williamcruzacero@hotmail.com",
            "password": "1234"
        });
        
        const reqOptions = {
            url: "http://localhost:80/sesion",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        
        const response = await axios.request(reqOptions);
        const {token} = response.data
        return token

    } catch (error) {
        throw error;
    }
}

const produtos = async (token) => {
    
    const axiosIntance = axios.create({
        baseURL: 'http://localhost:80',
        timeout: 5000,
        headers: {
           'Content-type': 'application/json', 
        }
    })

    axiosIntance.interceptors.request.use(
        config => {
            config.headers.Authorization = token
            return config;
        },
        error => {
            console.log(error);
            return Promise.reject(error);
    });

    const {data} = await axiosIntance.get('/api/productos')
    return data.productos
}

const tester = async () => {
    try {
        const token = await login();
        const listaProductos = await produtos(token)
        
        const isArray = listaProductos instanceof Array 
        const tieneElementos = listaProductos.length > 0
        const [produto] = listaProductos
        const {nombre, precio, imagen, cantidad} = produto
    
        if ( isArray && tieneElementos && nombre && imagen && cantidad >= 0 && precio >= 0) {
            console.log('Prueba superada')
        } else {
            console.log('Prueba falló')
        }
        
    } catch (error) {
        console.log(error.message)
        console.log( 'Prueba falló' )
    }
}

tester()