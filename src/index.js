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
    var dstrings = ["AAECAR8InOICgPMCoIADhtMCxsICtuoC+AibigML4eMCjQGczQKXCKvCArn4AtPNAtjCAt3SAovhAvLxAgA=", "AAECAaoICCCZAv4F88ICws4C9uwCp+4CzfQCC70B0wHZB/AHsQiRwQKbywKW6AKU7wKw8AKKgAMA", "AAECAR8IgAeHBMUI2wmiigOG0wLp0gKbhQML4eMCjQGH+wKXCMkE39ICtQOoAt3SAuPSAurjAgA=", "AAECAR8MyQSHBMcDrgadzALf0gL+DMn4AqeCA7sFhtMCm4UDCYvlAqCFA47DAoEKtQOoAqSIA93SAuPSAgA=",
                    "AAECAa0GBpeHA9UK6JQDyccCkNMCxQQM8gzlBL3zAuiJA6EE0cEC/OoCy+YCifECjQiQAujQAgA=", "AAECAZ8FCrcE8gX6Bv4HucECws4CzfQC6/cC/fsC74YDCtwD9AXPBooHrwf2B5YJs8ECiMcClugCAA==", "AAECAaIHBq8EyssC/eoCnvgC5/oC+v4CDIwCywPUBfUF3QiBwgKfwgLrwgLKwwLR4QKL5QKm7wIA", "AAECAZ8FCu0FucEC7dICjtMC4+MCw+oC/fsCvYYDz4YDzocDCroB+wHcA/QFzwb2B4jHAuPLAvjSAuyGAwA=",
                    "AAECAaIHBLIC7QKvBN0IDbQBjALNA70EmwWIB6QHhgmBwgLrwgLc0QLb4wKm7wIA", "AAECAZICCFa0A5ME7QWgzQLCzgKZ0wKb6AILQF/+AdMDxAbkCIfOApjSAp7SAtvTAr/yAgA=", "AAECAaoIBiDzwgLCzgL27AKn7gLN9AIMvQHTAf4F2QfwB7EIkcECrMICm8sClugClO8CsPACAA==", "AAECAa0GCAjFBIoHkAfTCtUK1gqQ0wILoQTlBPYHjQjyDPsM0cECyccC6NACy+YCvfMCAA==",
                    "AAECAaoICN4F08UCnOICq+cCw+oCp+4CnvAC7/cCC/kDgQT1BP4Fsgb7DJfBAsfBApvLAvPnAu/xAgA=", "AAECAZ8FBsUD8gWvB7nBAoPHAtHhAgzbA6cFpwixCLPBAp3CArHCArjHAuPLAvjSAtblAt6CAwA=", "AAECAZICBq8ErMICyssCmdMCnOIC0OcCDN4F8gWXwQLrwgKbywKHzgKR0ALR4QKL5QL55gLX6wKL7gIA", "AAECAf0EBJYGvwii0wK+7AINcbsClQOrBLQE5gSWBewFwcECmMQCj9MC++wC7/ECAA=="];
    var decoded = [];
    for (var i = 0; i < dstrings.length; i++){
      decoded.push(decode(dstrings[i]));
    }
    res.send({decks: decoded, codes: dstrings});
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
