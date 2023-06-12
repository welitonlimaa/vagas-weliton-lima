// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const"

// mudança 2: a variável jov deveria ser job e assim foi alterada

// mudança 3: para confirmar a adição a função sempre retorna o ultimo elemento adicionado em data

// mudança 4: adiciona o id correspondente a essa inserção

// mudança 5: retorna o status da requisição

// mudança 6: adiciona try catch para captura de erros no servidor

const data =  require("./fakeData");

module.exports = function(req, res){
  try {
    const name =  req.body.name;
    const job =  req.body.job;
    const id = data.length + 1;
    const newUser = {
        id, 
        name,
        job,
    }

    data.push(newUser)
    
    res.status(201).send(data[data.length - 1]);
  } catch (error) {
    res.status(500).send(error);
  }
};