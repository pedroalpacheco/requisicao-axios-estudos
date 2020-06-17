const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    distribuidora : String,
    codigo : String,
    titular : String,
    classe : String,
    subgrupo : String,
    modalidade :String,
    credito : String,
    municipio : String,
    uf : String,
    cep : String,
    data : String,
    fonte : String,
    potencia : String,
    modulos : String,
    inversores : String,
    arranjo: String
 });
 
 const dadosaneel = mongoose.model('dadosaneel', schema);
 
 module.exports = dadosaneel;