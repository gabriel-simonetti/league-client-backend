
let express = require('express');
let router = express.Router();
let confiq = require('./config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
