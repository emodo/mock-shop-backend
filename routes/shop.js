const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

var banner = Mock.mock({
  'list|1-4': [{
    'image': '@url',
    'url': '@url',
    'sort|+1': 1,
    'online': '@datetime',
    'offline': '@datetime',
    'time|1000-5000': 1
  }]
})

var logs = Mock.mock({
  'list|1-4': [{
    'image': '@url',
    'url': '@url',
    'sort|+1': 1,
    'online': '@datetime',
    'offline': '@datetime',
    'time|1000-5000': 1,
    'email': '@eamil'
  }]
})

var statics = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'question': '@sentence()',
        'anwser': '@sentence()'
    }]
})

/* GET users listing. */
router.get('/banner', function(req, res, next) {
  res.send(banner);
});

router.get('/static', function(req, res, next) {
  res.send(statics);
});

router.get('/logs', function(req, res, next) {
  res.send(logs);
});

module.exports = router;
