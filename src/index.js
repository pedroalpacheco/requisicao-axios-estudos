const scrap = require('./modules/scrap');
const consultausinas = require('./modules/consultausinas');
const consultamongo = require('./modules/consultabasemongo')

const urlconsulta = 'http://www2.aneel.gov.br/scg/gd/gd_fonte_detalhe.asp?tipo=12&pagina=1';

async function main(){
    const totusinasws = await consultamongo()
    console.log(totusinasws) 
}
/*async function main(){
    let nrusinas = await consultausinas(urlconsulta);
    console.log(nrusinas);
}*/

main();
//scrap(urlconsulta)