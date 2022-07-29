const usersCurrent = require('./data/users-current.json');
const assetsTypes = require('./data/assets-types.json');
const about = require('./data/about.json');
const omasSettings = require('./data/omas-settings.json');
const usersRoles = require('./data/users-roles.json');

module.exports = function (app) {
  app.get('/about.json', (req, res) => {
    res.send({
      name: 'dev',
      version: 'dev',
      commitId: 'dev',
      buildTime: 'dev'
    });
  });

  app.get('/api/glossaries', (req, res) => {
    res.send([{
      displayName: 'Test',
      status: 'Active'
    }]);
  });

  app.get('/api/glossaries/categories', (req, res) => {
    res.send([{
    displayName: 'Another test',
      status: 'Active'
    }]);
  });

  app.get('/api/glossaries/terms', (req, res) => {
    res.send([{
      displayName: 'Example',
      status: 'Active'
    }]);
  });

  app.get('/api/user', (req, res) => {
    res.status(200);
    res.send({});
  });

  app.get('/api/users/components', (req, res) => {
    res.send(['*']);
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
    const jwt = `eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI4M2NhZWI0YS0wY2YyLTRjOTEtODBlZS0wNjFiM2RiYzlkNjQiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1LCBOLkMuIChOaWNvbGFlIC0gQ2V6YXIpXCIsXCJmaXJzdE5hbWVcIjpcIk5pY29sYWUgLSBDZXphclwiLFwibGFzdE5hbWVcIjpcIlNpcmJ1XCIsXCJlbWFpbFwiOlwic2lyYnVuaWNvbGFlY2V6YXJAZ21haWwuY29tXCIsXCJhdmF0YXJVcmxcIjpudWxsLFwicm9sZXNcIjpbXCJST0xFXzFcIixcIlJPTEVfMlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcIipcIl19In0.i88eVipnwG6P5rIpPq3GMNv5n-tbuCujCsoE8KRXmoalx_sTVbyBM4UbCKW08RrxC_CpmylNQTIr1oDCGn42hg`;

    res.set('x-auth-token', jwt);
    res.send();
  });

  app.get('/api/users/current', (req, res) => {
    res.json(usersCurrent);
  });

  app.get('/api/users/roles', (req, res) => {
    res.json(usersRoles);
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