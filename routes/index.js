const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api/hello', (req, res, next) => {
  res.json("hello");
});
module.exports = router;
