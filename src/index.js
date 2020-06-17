const scrap = require('./modules/scrap');
const consultausinas = require('./modules/consultausinas');
const classmongo = require('./modules/classmongo');


const urlconsulta = 'http://www2.aneel.gov.br/scg/gd/gd_fonte_detalhe.asp?tipo=12&pagina=1';

async function main(url) {
  await classmongo.start()
    let totalusinas = await consultausinas(url);
    let totalwsusinas = await classmongo.contaregistros();
    console.log(`Dados raspados: ${totalwsusinas}`);
    console.log(`Dados total sites: ${totalusinas}`)
    if (totalwsusinas === totalusinas) {
      console.log('Não há dados novos!')
    } else {
      while (totalwsusinas <= totalusinas) {
        const urlsFilhos = 'http://www2.aneel.gov.br/scg/gd/gd_fonte_detalhe.asp?tipo=12&pagina=' + totalwsusinas;
        //console.log(urlsFilhos)
        await scrap(urlsFilhos);
        totalwsusinas++
      }
    }
  };

main(urlconsulta);