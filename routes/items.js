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
    'description': '@sentence',
    'price': '@url',
    'stock|50-100': 1,
    'detail': '@sentence',
    'shipping-rules|1-3': 1
  }
})

var fittings = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id': '@id',
    }]
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

module.exports = router;
