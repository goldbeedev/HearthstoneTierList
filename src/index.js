'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  unirest = require('unirest'),
  decode = require('deckstrings').decode;

//loop through decklists to decode and push to an array?

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;

app.use('/', express.static('public'));

// app.get('/my-data-endpoint', (req, res) => {
//   unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
//     .header("X-Mashape-Key", "0mmzJID0EImshKziZ9xGioPEVT3Sp1ueyDmjsn0PakOxETKmIn")
//     .end((result) => {
//       console.log(result.status, result.headers, result.body);
//       res.send(result);
//     });
// });

app.get('/my-data-endpoint', (req, res) => {
  unirest.get("https://api.hearthstonejson.com/v1/23966/enUS/cards.collectible.json")
    .end((result) => {
      console.log(result.status, result.headers, result.body);
      res.send(result);
    });
});

https://api.hearthstonejson.com/v1/23966/enUS/cards.collectible.json

app.get('/decks', function(req, res) {
    var dstrings = ["AAECAf0GBMnCApfTAtvpApz4Ag2KAfcEtgfECJvCAufLAvLQAvjQAojSAovhAvzlAujnArfxAgA=", "AAECAZ8FBrnBApvLAsLOArfnAvbsAs30AgzcA/IF9AWWBs8GigevB9kHsQiWCdnHAvjSAgA=", "AAECAZ8FBsUD8gWvB7nBAoPHAtHhAgzbA6cFpwixCLPBAp3CArHCArjHAuPLAvjSAtblAt6CAwA=", "AAECAZICBq8EysMCmdMCguICnOIC0OcCDN4F8gWXwQLrwgKbywLKywKHzgKR0ALR4QL55gLX6wKL7gIA",
                    "AAECAZ8FBEaiAqcFnvgCDfEF9QX5CpvCAuvCAoPHArjHAuPLApXOAvvTAtHhAtblArXmAgA=", "AAECAf0EBtAC08UCoM4Cws4Cm9MCo+sCDE2KAckD7AebwgKWxwLV4QLX4QKW5AK+7AKm8AK38QIA", "AAECAaIHBLICyAOvBJ74Ag2MAssDmwXUBfUF3QiBwgKfwgLrwgLKwwLR4QKL5QKm7wIA", "AAECAf0EBO0FvwjrwgKi0wINcbsClQOrBLQE5gSWBewFwcECmMQCj9MC++wC7/ECAA==",
                    "AAECAaIHBM0DhsICz+ECw+oCDcQBnALtAp8DiAWbBdQFhgmXwQL8wQLH0wLb4wL27AIA", "AAECAZICBpAHysMCh84Cws4Cr9MCxfMCDEBf6QHkCMnHApTSApjSAp7SAovhAoTmAo3wAr/yAgA=", "AAECAa0GBsUEigeQB9YKkNMCifECDKEE5QT2B40I0wryDNHBAsrDAsnHAujQAsvmAr3zAgA=", "AAECAaoICPUE9QX/BfPCApziAqfuAp7wAu/3AguBBP4FkwmXwQKZwgLrwgLKwwKHxAKbywL70wLf6QIA",
                    "AAECAR8CrwSe+AIOoQKiAqgCtQP1Be0GlwjbCf4Ml8EC68IClc4C4eMCi+UCAA==", "AAECAQcG0gLyBcLOAp/TAs3vApvwAgwckAOOBZEGigfrwgLMzQK67AKF7QKd8AKX8wLR9QIA", "AAECAaIHBLIC7QKvBIHCAg20AYwCzQO9BJsFiAekB90IhgnrwgLc0QLb4wKm7wIA", "AAECAaIHBLICrwTCzgKc4gINtAGMAu0C8gXdCIHCAuvCAsrDApvLAsrLAtvjAqbvAsf4AgA="];
    var decoded = [];
    for (var i = 0; i < dstrings.length; i++){
      decoded.push(decode(dstrings[i]));
    }
    res.send(decoded);
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
