var express = require('express');
var router = express.Router();
router.get("/resume",function(req,res){
	res.render("resume");
})

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'brohard.co' });
});
router.get("/about",function(req,res){
	res.render("about");
})

module.exports = router;

