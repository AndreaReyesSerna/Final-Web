const express = require('express');
const hbs = require('express-handlebars');
const Handlebars = require('handlebars');
const app = express();


app.use(express.static('public'));
app.engine('handlebars', hbs({
    defaultlayout: false,
}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.sendfile(__dirname+'/public/home.html');
});

app.get('/honeymoon', function (request, response) {

    response.sendfile(__dirname+'/public/honeymoon.html');
});


app.listen(process.env.PORT || 1234)


app.listen(3000, function () {
    console.log('escuchando el puerto 3000!');
});