const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
console.log('reach line 1');
//const fileUpload = require('express-fileupload');
console.log('reach line 2');
var mysql = require('mysql');
const path = require('path');
var db = mysql.createConnection ({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3278415',
    password: 'd78g2zp8QV',
    //database: 'users',
    port: '3306'
});

// connect to database
db.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//app.set('port', process.env.port || port); // set express to use this port
//app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
//app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
//app.use(fileUpload()); // configure fileupload

app.post("/", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Data: %s, %s", username, password);
    if (username == "kelwishahy" && password == "123") {
        res.send({redirect: '/#/main'});
    } else {
        res.send({redirect: '/#/'});
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
