const routesConfig = (app) => {
  app.get('/', (req, res) => {
    res.send('Server is running.')
  })
};

module.exports = routesConfig;
