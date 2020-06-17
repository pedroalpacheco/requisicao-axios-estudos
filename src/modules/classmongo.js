const sitemodel = require('../model/dadosaneelschema');
const connection = require('../config/connection');
const mongoose = require('mongoose');



const classmongo = {
    start: async () => {
        connection();
    },
    add: async (dt) => {
        try {
            const novodado = new sitemodel({
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
            });
            await novodado.save();
            await console.log(novodado);
        } catch (error) {
            console.log('Não foi salvar dados! => ' + error)
        }
    },
    contaregistros: async () => {
        try {
            let nrdados = await sitemodel.find({}).countDocuments();
            let dadosraspados = Math.round(nrdados / 1000)
            return dadosraspados
            //console.log(`Total de registros: ${nrdados}`);
        } catch (error) {
            console.log('Deu Pau!=> ' + error)
        }
    },
    close: async () => {
        mongoose.connection.close();
    }
};

module.exports = classmongo;