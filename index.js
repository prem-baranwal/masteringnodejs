
//var http = require('http');
var express = require('express');
var app = express();

// var server = http.createServer(function(req, res) {
// 	console.log("received request");
// 	res.writeHead(200, {'Content-type':'text/html'});
// 	res.end('<h1>Login Successful !!</h1> \
// 		<button type="submit" name="submit">Commit</button>\
// 		');
// });

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

app.get('/Candidates', function(req, res) {

	res.json([
				{"Name": "Prem Ratan Baranwal", "Address": {"House": "1501, Pride Emeritus", "Road": "DP Road", "PIN": "411007"}, "Gender": "Male" },
				{"Name": "Johny Bravo", "Address": {"House": "1501, Aston Villa", "Road": "Martin Road", "PIN": "95007"}, "Gender": "Male" }
			]);
});

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res) {
	console.log("Visit the URL http://localhost:"+port);
});

//server.listen(port);

console.log("Server(Express) started on port %s", port);