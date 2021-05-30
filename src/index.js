
const express = require('express');
const app = express();
const bp      = require('body-parser');
var compression = require('compression');
app.use(compression());
app.use(bp.json({limit: '50mb'}));

app.use(express.static('build'));

app.get('/ping', function (req, res) {
  res.send('pong');
});

const { usersRouter } = require('./routes/Users');


const server = app.listen(8000, function () {
  const port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});



app.use('/user/', usersRouter);


module.exports = app;
