var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/first-view', function(req, res){
    res.render('first-view');
});

app.get('/', function (req, res) {
    console.log("Redirected to /msg");
    res.redirect('/msg');
});

app.get('/msg', function (req, res) {
    res.send("Got to /store in order to enter our store website")
});


app.get('/store', function (req, res) {
    res.send('Witaj w aplikacji sklep');
});

app.listen(3000, function() {
    console.log("Aplikacja store nasluchuje na http://localhost:3000");
});
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
