var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('gifs are cool');

});

module.exports = router;
