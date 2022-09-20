var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

//express3-handlebars
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
//views/layouts/main.handlebars

//set view engine and use it by default 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//add static middleware
app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
    // res.type('text/plain');
    // res.send('Meadowlark Travel');
    res.render('home');
});


app.get('/about',function(req,res){
    // res.type('text/plain');
    // res.send('About Meadowlark Travel');
    var nonsense = require('./lib/nonsense');

    res.render('about', {nonsenses: nonsense.getNonsense()}); //refresh to see dynamic content
});

// custom 404 catch-all handler (middleware)
app.use(function(req,res){
    // res.type('text/plain');
    res.status(404);
    // res.send('404 - Not Found');
    res.render('notfound');
});

//custom 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    // res.type('text/plain');
    res.status(500);
    // res.send('500 - Server Error');
    res.render('error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on localhost: '+app.get('port'));
});