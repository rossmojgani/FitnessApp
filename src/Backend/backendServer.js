const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "default"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
});

app.post("/main", function(req, res) {
    myCursor = db.inventory.find( { status: "D" } )
    res.send({redirect: '/#/authentication_request'});
});

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
