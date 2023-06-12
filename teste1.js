var data =  require("./fakeData");

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