const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Data: %s, %s", username, password);
    if (username == "kelwishahy" && password == "123") {
        res.send({redirect: '/#/registerpage'});
    } else {
        res.send({redirect: '/#/'});
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))