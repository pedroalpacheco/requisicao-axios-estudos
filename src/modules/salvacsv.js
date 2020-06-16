const fs = require('fs');
const { Parser } = require('json2csv');

function salvacsv(dt){
    const json2csvParser = new Parser();
        const csv = json2csvParser.parse(dt);
        //console.log(dados);
        fs.writeFileSync('./dados-aneel.csv', csv, 'utf8');
};

module.exports=salvacsv;