const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(bodyParser.text());
app.use(cors());


app.use('/api', require('./src/routes'));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3001, () => console.log(`Listening on port 3001 ...`));