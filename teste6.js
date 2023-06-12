const authValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized!' });
  }

  next();
};

module.exports = authValidation;