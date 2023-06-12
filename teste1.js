const data =  require("./fakeData");
const researchedNames =  require("./queriesRegistration");

// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const"

// mudança 2: a função getUser pesquisa por um usuário que corresponda a query name,
// utilizar uma HOF nesse caso melhora a performance e a legibilidade do código

// mudança 3: registra a pesquisa do nome em researchedNames

// mudança 4: retorna o status da resposta a requisição

// mudança 5: adiciona try catch para captura de erros no servidor

const getUser = ( req, res, _next ) => {
  try {
    const name =  req.query.name;
    researchedNames.push({ name, date: Date.now() });
    const result = data.find((user) => user.name == name);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getUsers = ( _req, res, _next ) => {
  try {
    return res.send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
    getUser,
    getUsers
};