var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/htmlFile.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/myform', function(req, res){
    var myText = req.query.mytext; //mytext is the name of your input box
    res.send('Your Text:' +myText);
    if (myText == 'Hello') {
        console.log('Fuckin rowdy bud');
    }
});

app.use('/', router);
app.listen(8000);
