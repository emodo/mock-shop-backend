const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

var items = Mock.mock({
  'list|1-4': [{
    'id': '@id',
  }]
})

var item = Mock.mock({
  'data': {
    'id': '@id',
    'brand ': '@word(6)',
    'slogan': '@word(6)',
    'name': '@word(6)',
    'commodity-code': '@id',
    'product-code': '@id',
    'price|1-1000': 1,
    'stock|50-100': 1,
    'detail': '@sentence',
    'color': '@word(6)',
    'shipping-rules|1-3': 1
  }
})

var fittings = Mock.mock({
  'list|1-4': [{
    'id': '@id',
  }]
})

var fitting = Mock.mock({
  'data': {
    'id': '@id',
    'brand ': '@word(6)',
    'slogan': '@word(6)',
    'name': '@word(6)',
    'commodity-code': '@id',
    'product-code': '@id',
    'price|1-1000': 1,
    'stock|50-100': 1,
    'detail': '@sentence',
    'color': '@word(6)',
    'shipping-rules|1-3': 1
  }
})

var gifts = Mock.mock({
  'list|1-4': [{
    'id': '@id',
  }]
})

var gift = Mock.mock({
  'data': {
    'id': '@id',
    'brand ': '@word(6)',
    'slogan': '@word(6)',
    'name': '@word(6)',
    'commodity-code': '@id',
    'product-code': '@id',
    'price|1-1000': 1,
    'stock|50-100': 1,
    'detail': '@sentence',
    'color': '@word(6)',
    'shipping-rules|1-3': 1
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(items);
});

router.get('/:id', function(req, res, next) {
  res.send(item);
});


router.get('/fittings', function(req, res, next) {
  res.send(fittings);
});

router.get('/fittings/:id', function(req, res, next) {
  res.send(fitting);
});

router.get('/gifts', function(req, res, next) {
  res.send(gifts);
});

router.get('/gift', function(req, res, next) {
  res.send(gift);
});

module.exports = router;
