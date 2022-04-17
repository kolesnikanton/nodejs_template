const express = require('express');

const { CONFIG } = require('./constants');
const middlewares = require('./middlewares');
const test = require('./routes/test');

const app = express();

app.listen(CONFIG.port);

app.use(express.json());

app.use('/test', test);

app.use(middlewares.pageNotFound);
app.use(middlewares.errorHandler);
