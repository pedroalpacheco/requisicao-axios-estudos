const cheerio = require('cheerio');
const axios = require('axios');

const totpaginas = async (url)=>{
    let inteiropg = 0
    await axios.get(url)
    .then(function (response){
        let html = response.data;
        const $ = cheerio.load(html);
        let numeropaginas = $('body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr.linhaBranca > td:nth-child(2)').text().trim();
        inteiropg = Math.round(numeropaginas);//Arredonda para cima
        
    })
    return inteiropg;
   
    
};


module.exports = totpaginas;