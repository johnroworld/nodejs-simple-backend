const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const functions = require('./functions');

const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  try {
    let response;
    const { fn, params } = req.body;
    
    switch (fn) {
      case 'ping':
      case 'getVersion':
      case 'getUnixTimestamp':
      case 'getOsTimezone':
        response = functions[fn]();
        break;
      case 'changeOsTimezone':
        response = functions.changeOsTimezone(params.timezone);
        break;
      default:
        throw new Error('Method not found.');
    }

    res.json({
      ...response,
    });
  } catch ({ message }) {
    res.status(400).json({
      message,
    });
  }
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
