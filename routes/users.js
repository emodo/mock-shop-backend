const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

const users = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': '@word(6)',
    }]
})


const user = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data': {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'mobile|13': 1,
      'email': '@email',
      'address': '@sentence',
      'name': '@word(6)',
      'card|1-3': [{
        'expired': '@date',
        'name': '@word(3)',
        'limits': '@word(6)'
      }]
    }
})




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  res.send(user);
});


module.exports = router;
