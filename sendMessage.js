const axios = require("axios");


const token = '1939498860:AAFcfbqRHpXfo-COe1D4XhWNbHyL2wG3JxM';
const url = 'https://api.telegram.org/bot'


async function sendMessage(text) {
    try {
        const { data } = await axios.get(`${url}${token}/sendMessage?chat_id=1396226173&text=${text}`)

        return data;
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMessage