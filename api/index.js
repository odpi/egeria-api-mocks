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

  app.post('/api/token', (req, res) => {
    const jwt = 'eyJraWQiOiI4Y2FkZTQwMC00ZTBkLTQ4ZjktOWU2Mi1kNGNmOGMxZGEyMmQiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzYXJidWxsIiwic2NvcGUiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpc3MiOiJzZWxmIiwidmlzaWJsZUNvbXBvbmVudHMiOlsiKiIsImFzc2V0LWNhdGFsb2ciLCJ2ZXJ0aWNhbC1saW5lYWdlIiwiYXNzZXQtbGluZWFnZSIsImFib3V0IiwiZW5kLXRvLWVuZCIsInJlcG9zaXRvcnktZXhwbG9yZXIiLCJsaW5lYWdlLWltcG9ydCIsImFzc2V0LWxpbmVhZ2UtcHJpbnQiLCJnbG9zc2FyeSIsInVsdGltYXRlLWRlc3RpbmF0aW9uIiwiYXNzZXQtZGV0YWlscyIsInVsdGltYXRlLXNvdXJjZSIsInR5cGUtZXhwbG9yZXIiLCJhc3NldC1kZXRhaWxzLXByaW50Il0sImV4cCI6MTY4MTMwODIzMiwiaWF0IjoxNjgxMzA0NjMyfQ.Mluh_rebESwVDUFgHjBZLXpImIzmWpVvJGvX5ePCZrvyiABFkAwMKyrNUyagSKjuzKvmtU4ItXG-6FCXpCZ29grIUAoV-W_bLUij7YirBsJW8QtXEprBTqCHdnUQ7fNoOWTR0yvYgnTSzZ5OGtf-UWUokM4P5PUFz9doPNziup3d73Ti1T9EaGZcn1I_rC1oOPE8XKGkFujyUM8MtgUCGjs0awC59vB91Te6GplsYR1YWnrQuoBp1lpjXXUI6VIjw1NKsBfX0ETsAZZtn8SsM6TE_MsajeafJyvQ4F9quEzXEhNOL_tOtJIHnLUvSo6yn69mWdK7vbUFn5NVFX8WxA';

    res.send(jwt);
  });

  app.get('/api/assets/types', (req, res) => {
    res.json(assetsTypes);
  });

  app.get('/api/omas/settings', (req, res) => {
    res.json(omasSettings);
  });
};