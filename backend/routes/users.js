var express = require('express');
var router = express.Router();
var Message = require('../models/Message');


router.get('/',(req,res,next) => {
    Message.find({},(err,data) => {
        if(err) return next(err)
        res.send(data)
    })
})

router.post('/', (req, res, next) => {
  if (req.body.message) {
    Message.create(req.body.message, (err, data) => {
      if (err) return next(err);
      res.send(data);
    });
  }
});

router.get('/:name',(req,res,next) => {
    let name = req.params.name;
    Message.find({contact:name},(err,data) => {
        if (err) return next(err);
        res.send(data)
    })
})

module.exports = router;
