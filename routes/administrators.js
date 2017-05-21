const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

const administrators = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'email': '@email',
    }]
})


const administrator = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'email': '@email',
        'password': '@word(6)',
        'privileges|1': ['super', 'leader', 'member'],
        'visit': ['user', 'shop', 'item', 'order', 'user', 'promotion', 'after_sale']
    }]
})

const logs = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'email': '@email',
        'date': '@datetime',
        'operation': '@word(6)'
    }]
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(administrators);
});

router.get('/:id', function(req, res, next) {
  res.send(administrator);
});

router.get('/logs', function(req, res, next) {
  res.send(logs);
});

module.exports = router;
