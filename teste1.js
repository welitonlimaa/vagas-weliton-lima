const data =  require("./fakeData");
const researchedNames =  require("./queriesRegistration");

// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const"

// mudança 2: a função getUser pesquisa por um usuário que corresponda a query name,
// utilizar uma HOF nesse caso melhora a performance e a legibilidade do código

// mudança 2: registra a pesquisa do nome em researchedNames

const getUser = ( req, res, _next ) => {
    const name =  req.query.name;
    researchedNames.push({ name, date: Date.now() });
    const result = data.find((user) => user.name == name);

    res.send(result);
};

const getUsers = ( _req, res, _next ) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};