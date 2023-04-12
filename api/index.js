const usersCurrent = require('./data/users-current.json');
const assetsTypes = require('./data/assets-types.json');
const about = require('./data/about.json');
const omasSettings = require('./data/omas-settings.json');
const usersRoles = require('./data/users-roles.json');
const glossaries = require('./data/glossaries.json');
const glossaryCategories = require('./data/glossaries-{glossaryGUID}-categories.json');
const glossaryTerms = require('./data/glossaries-categories-{categoryGUID}-terms.json');

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
    res.json(glossaries);
  });

  app.get('/api/glossaries/:guid/categories', (req, res) => {
    res.json(glossaryCategories);
  });

//   app.get('/api/glossaries/categories', (req, res) => {
//     res.json(glossaryCategories);
//   });

  app.get('/api/glossaries/categories/:guid/terms', (req, res) => {
    res.json(glossaryTerms);
  });

//   app.get('/api/glossaries/categories/terms', (req, res) => {
//     res.json(glossaryTerms);
//   });

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

  app.get('/api/public/app/info', (req, res) => {
    res.json({
      title: 'Open Metadata Platform'
    });
  });

  app.post('/api/token', (req, res) => {
    const jwt = `eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1OWUzY2EwMy1hYzFmLTRiODQtOGMxYi1kMWNkODQ2MWI1NDAiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1IE5pY29sYWUtQ2V6YXJcIixcImZpcnN0TmFtZVwiOlwiTmljb2xhZSAtIENlemFyXCIsXCJsYXN0TmFtZVwiOlwiU2lyYnVcIixcImVtYWlsXCI6XCJzaXJidW5pY29sYWVjZXphckBnbWFpbC5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQURNSU5cIixcIlJPTEVfVVNFUlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcImVuZC10by1lbmRcIixcIipcIixcInJlcG9zaXRvcnktZXhwbG9yZXJcIixcImFzc2V0LWxpbmVhZ2UtcHJpbnRcIixcImdsb3NzYXJ5XCIsXCJ1bHRpbWF0ZS1kZXN0aW5hdGlvblwiLFwiYXNzZXQtZGV0YWlsc1wiLFwidWx0aW1hdGUtc291cmNlXCIsXCJ0eXBlLWV4cGxvcmVyXCIsXCJhc3NldC1kZXRhaWxzLXByaW50XCIsXCJsaW5lYWdlLWltcG9ydFwiXX0ifQ.q9DgwVPjQ1nl05szkbZY-z8tcEcX1B0vcaFLFfKK1M3lc6s89kmdBdUSPyazWeXf8OCVMdOOhh9XzoSUqUQGJA`;

    res.send(jwt);
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