const pageNotFound = (req, res, next) => {
  res.send('Page not found');
  next();
};

module.exports = pageNotFound;
