//const mongoose = require('mongoose');
//const basemongo = require('./basemongo');
const adddadosaneel = require('./adddadosaneel');

//Conecta na base
//basemongo();

function salvandodados(dt) {
    const novoDado = new adddadosaneel({
        distribuidora: dt.distribuidora,
        codigo: dt.codigo,
        titular: dt.titular,
        classe: dt.classe,
        subgrupo: dt.subgrupo,
        modalidade: dt.modalidade,
        credito: dt.credito,
        municipio: dt.municipio,
        uf: dt.uf,
        cep: dt.cep,
        data: dt.data,
        fonte: dt.fonte,
        potencia: dt.potencia,
        modulos: dt.modulos,
        inversores: dt.inversores,
        arranjo: dt.arranjo
    })
    //console.log(novoDado)
    novoDado
        .save();

};

module.exports=salvandodados;