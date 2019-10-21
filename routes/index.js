var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Tutorial' });
});

router.post('/', function(req, res){
    var body = req.body;
    if (!body) return res.sendStatus(400);
    console.log(JSON.stringify(req.body));
    console.log(body.first_name); 
    console.log(body.last_name); 

    var res_body = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email
    };

    res.render('welcome', res_body);
});

module.exports = router;