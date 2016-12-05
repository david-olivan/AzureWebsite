var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zenore Game Studios', selected: 'index', language: 'english' });
});

module.exports = router;
