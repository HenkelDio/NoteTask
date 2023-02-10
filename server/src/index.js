const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const route = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(route);

app.listen(3000, () => console.log('Server is running at http://localhost:3000'));
