const axios = require('axios');
const cheerio = require('cheerio');
const classmongo = require('./classmongo');

let dados = {};

async function scrap(url) {
    await console.time('#TempoScraping');
    await classmongo.start()
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    for (i = 2; i < 1003; i++) {
        let distribuidora = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(1)`).text().trim();
        let codigo = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(2)`).text().trim();
        let titular = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(3)`).text().trim();
        let classe = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(4)`).text().trim();
        let subgrupo = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(5)`).text().trim();
        let modalidade = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(6)`).text().trim();
        let credito = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(7)`).text().trim();
        let municipio = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(8)`).text().trim();
        let uf = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(9)`).text().trim();
        let cep = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(10)`).text().trim();
        let data = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(11)`).text().trim();
        let fonte = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(12)`).text().trim();
        let potencia = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(13)`).text().trim();
        let modulo = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(14)`).text().trim();
        let inversores = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(15)`).text().trim();
        let arranjo = $(`body > table:nth-child(4) > tbody > tr:nth-child(1) > td > table:nth-child(4) > tbody > tr:nth-child(${i}) > td:nth-child(16)`).text().trim();

        dados = {
            distribuidora,
            codigo,
            titular,
            classe,
            subgrupo,
            modalidade,
            credito,
            municipio,
            uf,
            cep,
            data,
            fonte,
            potencia,
            modulo,
            inversores,
            arranjo
        }

        
        await classmongo.add(dados);
        //console.log(dados);

    }
    await classmongo.close();
    await console.timeEnd('#TempoScraping');
}

module.exports = scrap;