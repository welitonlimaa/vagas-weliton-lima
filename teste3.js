// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const" ou "let"

// mudança 2: a função pesquisa por um usuário que corresponda a query name e o "Deleta",
// utilizar uma HOF nesse caso melhora a performance e a legibilidade do código

// mudança 3: retorna o status da resposta a requisição

// mudança 4: adiciona try catch para captura de erros no servidor

const data =  require("./fakeData");

module.exports = function(req, res) {
  try {
    const name =  req.query.name;

    const user = data.find((data) => data.name == name);
    const index = data.indexOf(user);

    data[index] = null;

    return res.status(200).send("success");
  } catch (error) {
    return res.status(500).send(error);
  }
};