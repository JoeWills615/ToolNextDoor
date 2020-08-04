const db = require('../models')

module.exports = {
    findAll: (req, res) => {
      db.Tool
        .find(req.query)
        //.sort({})
        .then(tools => res.json(tools))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
      console.log(req.params);
      db.Tool
        .findById(req.params.id)
        .then(tool => res.json(tool))
        .catch(err => res.status(422).json(err));
    },
    findByName: (req, res) => { 
      db.Tool
        .find({category: req.params.id})
        .then(tool => res.json(tool))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
      db.Tool
        .create(req.body.newTool)
        .then(tool => res.json(tool))
        .catch(err => res.status(422).json(err));
    },
    /* update: (req, res) => {
      db.Tool
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(tool => res.json(tool))
        .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
      db.Tool
        .findById({ _id: req.params.id })
        .then(tool => tool.remove())
        .then(tool => res.json(tool))
        .catch(err => res.status(422).json(err));
    }, */
  };