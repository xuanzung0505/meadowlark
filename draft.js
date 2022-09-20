var express = require('express');

var app = express();

app.set('port',8080||process.env.PORT);

//static dir middleware
app.use(express.static(__dirname+'/public'));

//handlebars
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

//get

//catch-all handler
app.get('/',function(req, res){
    res.render('home');
})

app.get('/about', function(req,res){
    res.render('about');
})

//custom 404
app.use(function(req,res){
    res.status(404);
    // res.type('text/html');
    // res.send('404 not found');
    res.render('notfound');
})

//custom 500
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500);
    res.render('error');
})

app.listen(app.get('port'), function(){
    console.log("stared on Express, port: "+app.get('port'));
});

