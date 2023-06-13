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
    if (data.length == 0) return res.status(404).send('User not found!');
    const reg = data.find((d) => {
      if (d != null) return d.id == id;
    });
    if (!reg) return res.status(404).send('User not found!');
    reg.name = name;
    reg.job = job;

    return res.status(200).send(reg);
  } catch (error) {
    return res.status(500).send(error);
  }
};