const express = require('express');
const Mock = require('mockjs');
const router = express.Router();

const data = Mock.mock({
    
})




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});



module.exports = router;
