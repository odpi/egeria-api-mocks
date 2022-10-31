const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', '*');

  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add latency in response time to simulate
// poor internet connection
app.use(function (req, res, next) {
  setTimeout(() => {
    next()
  }, 1500);
});

// Check for presence of token, return 401 if not found
app.use(function (req, res, next) {
  if(`${req.baseUrl}${req.path}` !== '/api/auth/login' && !req.headers['x-auth-token']) {
    res.status(401);
  }

  next();
});

app.get('/', (req, res) => {
  res.json({
    app: true
  });
});

require('./api')(app);
require('./api/lineage')(app);

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});