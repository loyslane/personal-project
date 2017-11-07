const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Weight = require('../models/weightModels');

const STATUS_USER_ERROR = 422;

const listWeights = (req, res) => {
  Weight.find({})
  .sort( {week: 'asc' } )
  .exec((error, weights) => {
    if (error) {
      res.status(STATUS_USER_ERROR);
      res.json(error);
    } else {
      res.json(weights);
    }
  });
};

const addWeight = (req, res) => {
  const { weight, week } = req.body;
  const  newWeight = new Weight({ weight, week });
  newWeight.save((err, weight) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    } else {
      res.json(weight);
    }
  });
};

const updateWeight = (req, res) => {
  const week = req.params.week;
  const weight = req.body.weight;
  const updatedWeight = { weight, week }
  Weight.findOne({ week })
  .exec((err, weight) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
    } else {
      weight = updatedWeight;
      res.json(weight);
    }
  });
};

module.exports = {
  listWeights,
  addWeight,
  updateWeight
};