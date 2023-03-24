const express = require('express');

const server = express();

const artRouter = require('./art/router');

server.use(express.json());
server.use('/', artRouter);

// server.use('/', (req, res, next) => {
//     res.json({api: 'up'})
// })

module.exports = server