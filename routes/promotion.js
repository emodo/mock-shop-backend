const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

const promotions = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': '@word(5)',
    }]
})


const promotion = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'expired': '@date',
        'name': '@word(3)',
        'limits': '@word(6)'
    }]
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(promotions);
});

router.get('/:id', function(req, res, next) {
  res.send(promotion);
});



module.exports = router;
