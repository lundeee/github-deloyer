const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// const db = require('./db');
const { routes } = require('./routes.js');

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}))
// app.use(morgan('combined'));
app.use(morgan('[:date[iso]] :method :url :status :response-time :user-agent :remote-addr '));
routes(app);
const port = process.env.PORT === undefined ? 7002: process.env.PORT;
app.listen(port, () => console.log(`App listening on port ${port}!`));

