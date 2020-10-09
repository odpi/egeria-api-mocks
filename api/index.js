module.exports = function(app) {
  app.get('/api/js/global', (req, res) => {
    res.type('.js');
    res.send('window.MyAppGlobals = { rootPath: \'/\' };');
  });

  app.get('/api/css/theme', (req, res) => {
    res.redirect('/api/themes/default/css/style.css');
  });

  app.get('/api/src/app/info', (req, res) => {
    res.json({
      title: 'Open Metadata Platform'
    });
  });


  // app.post('/api/test', function(req, res) {
  //   let user_id = req.body.id;
  //   let token = req.body.token;
  //   let geo = req.body.geo;

  //   res.send(user_id + ' ' + token + ' ' + geo);
  // });
};