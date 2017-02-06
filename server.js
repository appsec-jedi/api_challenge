var express = require('express');
var index = require('./routes/index');
var gif = require('./routes/gif');
var app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', gif);
app.use('/favorites', gif);

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
