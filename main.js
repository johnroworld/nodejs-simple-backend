const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let applicationSettings = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getVersion = require('./middlewares')
app.post('/api', getVersion, (req, res) => {
  // res.send(res.jsonResponse)
})
app.listen(port, () => console.log(`Listening on port ${port}!`));