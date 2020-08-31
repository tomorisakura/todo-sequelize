const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/index');

const app = express();
app.use(route);

const port = process.env.port || 3000;

app.listen( port , () => {
    try {
        console.log(`Running on port ${port}`);
    } catch (error) {
        throw error;
    }
});