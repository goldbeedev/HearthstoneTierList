'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  unirest = require('unirest');



var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;

app.use('/', express.static('public'));

app.get('/my-data-endpoint', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
    .header("X-Mashape-Key", "0mmzJID0EImshKziZ9xGioPEVT3Sp1ueyDmjsn0PakOxETKmIn")
    .end((result) => {
      console.log(result.status, result.headers, result.body);
      res.send(result);
    });
});

// vendor scripts
app.get('/vendor/angular.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular', 'angular.js'));
});
app.get('/vendor/angular-route.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-route', 'angular-route.js'));
});
app.get('/vendor/angular-animate.js', function(req,res){
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-animate', 'angular-animate.js'));
});
app.get('/vendor/smoothscroll.js', function(req,res){
  res.sendFile(path.join(__dirname, '../node_modules', 'smoothscroll', 'smoothscroll.js'));
});


app.listen(port);
console.log('Magic happens on port ' + port);
