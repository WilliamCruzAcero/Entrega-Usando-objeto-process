require('dotenv').config()
const twilio = require('twilio')

const TWILIO_ACOUNT_SID='ACe03b737cbaa3c6a794af503c9417951b'
const TWILIO_AUTH_TOKEN='1aa634ea5b8b8c9424b652dd6867b4f4'
const TWILIO_PHONE_NUMBER='+14155238886'

const client = twilio 
(
    TWILIO_ACOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER    
)

async function envioWhatsapp() {

    let result = await client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+573107183388',
        body: 'Hola mensaje'
    })

}

module.exports = envioWhatsapp;