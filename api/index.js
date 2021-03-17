const usersCurrent = require('./data/users-current.json');
const assetsTypes = require('./data/assets-types.json');
const about = require('./data/about.json');
const omasSettings = require('./data/omas-settings.json');
const usersComponents = require('./data/users-components.json');

module.exports = function (app) {
  app.get('/api/user', (req, res) => {
    res.status(200);
    res.send({});
  });

  app.get('/api/ui/settings', (req, res) => {
    res.json({});
  });

  app.get('/api/logout', (req, res) => {
    res.json({});
  });

  app.get('/api/public/js/global', (req, res) => {
    res.type('.js');
    res.send('window.MyAppGlobals = { rootPath: \'/\' };');
  });

  app.get('/api/public/css/theme', (req, res) => {
    let theme = 'default';

    res.redirect(`/api/themes/${theme}/css/style.css`);
  });

  app.get('/api/public/app/info', (req, res) => {
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

  app.get('/api/users/components', (req, res) => {
    res.json(usersComponents);
  });

  app.get('/api/assets/types', (req, res) => {
    res.json(assetsTypes);
  });

  app.get('/api/about', (req, res) => {
    res.json(about);
  });

  app.get('/api/omas/settings', (req, res) => {
    res.json(omasSettings);
  });
};