var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bolsa_trabajo', function(req, res, next) {
  res.render('bolsa_trabajo');
});

router.get('/maquinarias', function(req, res, next) {
  res.render('maquinarias');
});

router.get('/maquimas', function(req, res, next) {
  res.render('maquimas');
});

router.get('/galeria', function(req, res, next) {
  res.render('galeria');
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros');
});
module.exports = router;
