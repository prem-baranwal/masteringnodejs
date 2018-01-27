
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

app.get('/Candidates', function(req, res) {

	res.json([
				{"Name": "Prem Ratan Baranwal", "Address": {"House": "1501, Pride Emeritus", "Road": "DP Road", "PIN": "411007"}, "Gender": "Male" },
				{"Name": "Johny Bravo", "Address": {"House": "1501, Aston Villa", "Road": "Martin Road", "PIN": "95007"}, "Gender": "Male" }
			]);
});

var port = process.env.PORT || 8080; //for Heroku

var server = app.listen(port, function(req, res) {
	console.log("Visit the URL http://localhost:"+port);
});


console.log("Server(Express) started on port %s", port);