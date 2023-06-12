// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const"

// mudança 2: conta as vezes em que o nome foi pesquisado com base nos registros de pesquisa

// mudança 3: retorna o status da resposta a requisição

// mudança 4: adiciona try catch para captura de erros no servidor

const researchedNames =  require("./queriesRegistration");

module.exports = function(req, res){
  try {
    const name =  req.query.name;

    const count = researchedNames.reduce((acc, curr) => { 
      if (curr.name === name) {
        return acc + 1;
      }
      return acc;
    }, 0)

    res.status(200).send(`Usuário ${name} foi lido ${count} vezes.`);

  } catch (error) {
    res.status(500).send(error);
  }
};  