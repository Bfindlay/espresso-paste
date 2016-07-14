var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.post('/paste', function(req, res) {
    var text = req.body.text;
    console.log("paste submitted", text);
    return res.redirect("/");
});

module.exports = router;
