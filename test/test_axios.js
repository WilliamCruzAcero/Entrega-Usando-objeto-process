const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://proyecto-coderhouse-williamcruz.onrender.com:8080',
    timeout: 1000
  });

const login = async() => {
    try {
        const {token}  = await instance.post('/login', {
            email: "williamcruzacero@hotmail.com",
            password: "1234"
        });
        console.log(token)

    } catch (error) {
        console.error(error)
    }
}

login();