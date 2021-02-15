const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api/themes/', express.static('./api/themes/'));

app.get('/', (req, res) => {
  res.json({});
});

require('./api')(app);
require('./mockdata/api/data')(app);

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});