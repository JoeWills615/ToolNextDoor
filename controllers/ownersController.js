const db = require('../models')

module.exports = {
    findAll: (req, res) => {
      db.Owner
        .find(req.query)
        .then(owners => res.json(owners))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
      db.Owner
        .findById(req.params.id)
        .then(owner => res.json(owner))
        .catch(err => res.status(422).json(err));
    }
  };