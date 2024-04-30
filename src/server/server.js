const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

responseData = {};

const app = express();

app.use(express.static('src'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send(path.resolve('src/client/views/index.html'));
});

const port = 8000

// POST method route
app.post('/add', addInfo);

function addInfo(req, res) {
    responseData['text'] = req.body.text;
    responseData['subjectivity'] = req.body.subjectivity;
    responseData['polarity'] = req.body.polarity;
    res.send(responseData);
}

app.listen(port, function () {
    console.log('Example app listening on port 8000!')
})