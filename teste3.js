// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const" ou "let"

// mudança 2: a função pesquisa por um usuário que corresponda a query name e o "Deleta",
// utilizar uma HOF nesse caso melhora a performance e a legibilidade do código

const data =  require("./fakeData");

module.exports = function(req, res) {
  
    const name =  req.query.name;

    const user = data.find((data) => data.name == name);
    const index = data.indexOf(user);

    data[index] = null;

    res.send("success");
};