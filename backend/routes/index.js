var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello');
});
router.post('/', (req, res) => {
  console.log(req.body);
});
module.exports = router;
