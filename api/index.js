const usersCurrent = require('../mockdata/api/users-current.json');
const assetsTypes = require('../mockdata/api/assets-types.json');
const about = require('../mockdata/api/about.json');
const assetsSearch = require('../mockdata/api/assets-search.json');
const omasSettings = require('../mockdata/api/omas-settings.json');
const assetsDatabaseColumn = require('../mockdata/api/assets-database-column.json');
const lineageEntitiesDatabaseColumn = require('../mockdata/api/lineage-entities-database-column.json');
const lineageEntitiesDatabaseColumnVerticalLineage = require('../mockdata/api/lineage-entities-database-column-vertical-lineage.json');
const lineageEntitiesDatabaseColumnEnd2End = require('../mockdata/api/lineage-entities-database-column-end-2-end.json');
const lineageEntitiesDatabaseColumnEnd2EndIncludeProcesses = require('../mockdata/api/lineage-entities-database-column-end-2-end-include-processes.json');
const lineageEntitiesDatabaseColumnUltimateSource = require('../mockdata/api/lineage-entities-database-column-ultimate-source.json');
const lineageEntitiesDatabaseColumnSourceAndDestination = require('../mockdata/api/lineage-entities-database-column-source-and-destination.json');
const usersComponents = require('../mockdata/api/users-components.json');

module.exports = function (app) {
  app.get('/api/public/js/global', (req, res) => {
    res.type('.js');
    res.send('window.MyAppGlobals = { rootPath: \'/\' };');
  });

  app.get('/api/public/css/theme', (req, res) => {
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

  app.get('/api/users/components', (req, res) => {
    res.json(usersComponents);
  });

  app.get('/api/assets/types', (req, res) => {
    res.json(assetsTypes);
  });

  app.get('/api/about', (req, res) => {
    res.json(about);
  });

  app.get('/api/assets/search', (req, res) => {
    res.json(assetsSearch);
  });

  app.get('/api/omas/settings', (req, res) => {
    res.json(omasSettings);
  });

  app.get('/api/assets/database_column:somedata', (req, res) => {
    res.json(assetsDatabaseColumn);
  });

  app.get('/api/lineage/entities/database_column:somedata/ultimate-destination', (req, res) => {
    res.json(lineageEntitiesDatabaseColumn);
  });

  app.get('/api/lineage/entities/database_column:somedata/vertical-lineage', (req, res) => {
    res.json(lineageEntitiesDatabaseColumnVerticalLineage);
  });

  app.get('/api/lineage/entities/database_column:somedata/end2end', (req, res) => {
    let includeProcesses = req.query.includeProcesses;

    if (includeProcesses !== "true") {
      res.json(lineageEntitiesDatabaseColumnEnd2EndIncludeProcesses);
    } else {
      res.json(lineageEntitiesDatabaseColumnEnd2End);
    }

  });

  app.get('/api/lineage/entities/database_column:somedata/ultimate-source', (req, res) => {
    res.json(lineageEntitiesDatabaseColumnUltimateSource);
  });

  app.get('/api/lineage/entities/database_column:somedata/source-and-destination', (req, res) => {
    res.json(lineageEntitiesDatabaseColumnSourceAndDestination);
  })
};