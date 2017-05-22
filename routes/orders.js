const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

const orders = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': '@word(6)',
    }]
})


const order = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'data': {
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'email': '@email',
    'name': '@word(6)',
    'commodity-code': '@id',
    'product-code': '@id',
    'price|1-1000': 1,
    'color': '@word(3)',
    'quantity|1-50': 1,
    'paymentType|1-5': 1,
    'serial-number': '@id',
    'status|1-5': 1,
    'user': {
      'id': '@id',
      'nickname': '@word(6)',
      'name': '@word(6)',
      'address': '@sentence',
      'telephone|13': 1,
    }
  }
})




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(orders);
});

router.get('/:id', function(req, res, next) {
  res.send(order);
});


module.exports = router;
