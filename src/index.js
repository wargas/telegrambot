const cron = require("node-cron");
const fs = require('fs');
const path = require("path");
const sendMessage = require("../sendMessage");
const { default: axios } = require("axios");


cron.schedule("*/5 * * * * *", async () => {

    const old = (await fs.readFileSync("src/data")).toString();
    
    const {data} = await axios.get('https://api.cebraspe.org.br/eventos/SEFAZ_CE_21')

    const newText = JSON.stringify(data);

    if(old !== newText) {
        await fs.writeFileSync("src/data", newText);
        await sendMessage("CEBRASPE ATUALIZOU O SITE")
    }


})
