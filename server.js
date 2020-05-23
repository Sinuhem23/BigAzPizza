const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const db = require('./serverSide/db');
const pizzaRouter = require('./serverSide/routes/api/pizza-router');

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', pizzaRouter);

app.listen(apiPort, () => console.log(`🌎 Server running on port ${apiPort}`));
