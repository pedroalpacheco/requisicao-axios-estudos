const mongoose = require('mongoose');

async function basemongo() {
    await mongoose.connect('mongodb://localhost:27017/aneelsolar', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(result => {
            console.log('Consultando número de documentos RASPADOS...');
        })
        .catch(error => {
            console.log("DEU PROBLEMA!!>: " + error);
        });
};

module.exports = basemongo;