var express = require("express");
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.send("hello");
});

app.listen(app.get('port'), function(){
	console.log("express runs, presse ctrl+c to stop");
});
