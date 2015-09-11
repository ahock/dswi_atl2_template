//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

//
router.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});
router.use(express.static(path.resolve(__dirname, 'client')));
router.use(express.static(path.resolve(__dirname, 'data')));
router.use(express.json());
router.use(express.urlencoded());

router.post('/write', function(req, res){
  var fileContent = JSON.parse('{"Fach":'+req.body.fachliste+'}');
  fs.writeFile('data/dataset.json', JSON.stringify(fileContent), function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
  res.send('Daten sind da!');
  res.end();
});

//
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Server listening");
});