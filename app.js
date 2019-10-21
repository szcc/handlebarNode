 
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
const express = require('express');
//const connect = require('connect');
const path = require('path');//sue

var exphbs = require('express-handlebars');
const app = express();
//const app = connect();
// const path = require("path");
//
// express.set('views', path.join(_dirname, "views"))
// express.set("view engine", "hbs")
app.use(function middleware1(req, res, next) {
  // middleware 1
  next();
});
app.use(function middleware2(req, res, next) {
  // middleware 2
  next();
});


app.use(bodyParser.urlencoded({
    extended: false
}));
//app.use(bodyParser.json());
//app.use(express.bodyParser());


app.engine('handlebars', exphbs({defaultView: 'main'}));
//sue app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');
// route for homepage
app.get('/', function (req, res) {
  //res.render('main', {layout: 'hello',title: 'My first handlebar get()'})
  res.render('index', {title: 'My first handlebar'})
})

/***app.post('/chatbot.php', function (req, res) {
    res.render('main', {layout: 'chatbot.php'})
})

app.post('/', function (req, res) {
	//Grab the request body
    var body = req.body;

    var res_body = {
        title: body.title,
        labname:body.labname
        //name: body.name_1
	};
    //res.render('sue', {layout: 'hello',body:res_body})
    res.render('sue', res_body);
})
***/
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
