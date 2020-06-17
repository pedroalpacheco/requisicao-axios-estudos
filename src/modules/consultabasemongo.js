const basemongo = require('./basemongo');
//const dadosaneel = require('./dadosaneel');
const adddadosaneel = require('./adddadosaneel');
const mongoose = require('mongoose');

//Conecta na base
basemongo();

//Chama model
const dadosmodel = adddadosaneel();


const consultabase = async ()=>{
    const dtaneel = mongoose.model('dadosaneel', dadosmodel);
    return dtaneel.countDocuments((err, count) => {
      mongoose.connection.close();
    });
}

async function consultabasemongo(){
    let numerodados = await consultabase()
    let totalusinasraspadas = Math.round(numerodados / 1000);
    return totalusinasraspadas;
};

module.exports = consultabasemongo;
