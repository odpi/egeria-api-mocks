const usersCurrent = require('../mockdata/api/users-current.json');
const assetsTypes = require('../mockdata/api/assets-types.json');
const about = require('../mockdata/api/about.json');

module.exports = function(app) {
  app.get('/api/js/global', (req, res) => {
    res.type('.js');
    res.send('window.MyAppGlobals = { rootPath: \'/\' };');
  });

  app.get('/api/css/theme', (req, res) => {
    let theme = 'default';

    res.redirect(`/api/themes/${theme}/css/style.css`);
  });

  app.get('/api/src/app/info', (req, res) => {
    res.json({
      title: 'Open Metadata Platform'
    });
  });

  app.post('/api/auth/login', (req, res) => {
    // let user_id = req.body.id;

    res.set('x-auth-token', '12345');
    res.send();
  });

  app.get('/api/users/current', (req, res) => {
    res.json(usersCurrent);
  });

  app.get('/api/assets/types', (req, res) => {
    res.json(assetsTypes);
  });

  app.get('/api/about', (req, res) => {
    res.json(about);
  })
};