const express = require('express');

const ProblemRouter = require('./problems.routes');

const v1Router = express.Router();

v1Router.use('/problems', ProblemRouter);
// v1Router.get('/problems', ProblemController.pingProblemController);

module.exports = v1Router;