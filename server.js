const express = require('express'),
	   //path = require('path');
const app = express();
app.use(express.static(__dirname + './dist'));
//app.get('/*',(req,res)=>{
	//res.sendFile(path.join(__dirname,'/dist'));
	
//});

app.listen(process.env.PORT || 8080);
//app.listen(process.env.PORT || 8080, ()=>{
	//console.log("server started");
//})