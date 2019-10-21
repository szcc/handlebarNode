module.exports = function(app) {

    // route for homepage
    app.get('/', function(req, res) {
        res.render('main');
    })
}
