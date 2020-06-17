const mongoose = require('mongoose');

function connection(){

    // We need to difine the URL
    const URL = process.env.URL || 'mongodb://localhost:27017/aneelsolar';
    
    
    
    //Connection establishment
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    //Models
    // require('../model/user');
    const db = mongoose.connection;
    
    //We enebled the Listener
    db.on('error', () => {
        console.error('ERRO AO CONECTAR');
    });
    
    db.on('open', () => {
        console.log('CONEXAO COM SUCESSO!');
    });
};
module.exports = connection;