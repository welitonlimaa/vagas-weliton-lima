const data =  require("./fakeData");

// mudança 1: utilizar "var" para declarar uma variável pode causar problemas pois "vaza o escopo"
// mudei para "const"

// mudança 2: a função getUser pesquisa por um usuário que corresponda a query name,
// utilizar uma HOF nesse caso melhora a performance e a legibilidade do código

const getUser = ( req, res, _next ) => {
    const name =  req.query.name;

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