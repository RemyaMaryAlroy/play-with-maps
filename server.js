const express = require('express');
path = require('path');
const app = express();


app.use(express.static('./dist/dummy'));


app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname + '/dist/dummy/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
	console.log('Console listening');
})

