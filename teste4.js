// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const"

// mudança 2: correção no parâmetro passado para a HOF find asserção estava errada
// o correto é (d.id == id)

// mudança 3: desestruturação do body

// mudança 4: retorna o status da resposta a requisição

// mudança 5: adiciona try catch para captura de erros no servidor

const data =  require("./fakeData");

module.exports =  function(req, res) {
  try {
    const id =  req.query.id;
    const { name, job } = req.body;

    const reg = data.find(d => d.id == id);
    reg.name = name;
    reg.job = job;

    res.status(200).send(reg);
  } catch (error) {
    res.status(500).send(error);
  }
};