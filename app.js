 
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const express = require('express');
const path = require('path');//sue

var exphbs = require('express-handlebars');
const app = express();

/***app.use(function middleware1(req, res, next) {
  // middleware 1
  next();
});
app.use(function middleware2(req, res, next) {
  // middleware 2
  next();
});
***/
app.use(bodyParser.urlencoded({
    extended: false
}));


app.engine('handlebars', exphbs({defaultView: 'main'}));

app.set('view engine', 'hbs');
// route for homepage
app.get('/', function (req, res) {
  res.render('index', {title: 'My first handlebar'})
})

app.post('/', function(req, res){
    var body = req.body;
    if (!body) return res.sendStatus(400);
    console.log(JSON.stringify(req.body));
    console.log(body.first_name);
    var res_body = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email
    };

    res.render('welcome', res_body);
});

module.exports = app;

const port = 5001 
app.listen(port,() => console.log(`Example app listening on port ${port}!`))
