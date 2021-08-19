const Client = require('../models/client');

module.exports = {
  get: async (req, res, next) => {
    const clients = await Client.find().catch(next);
    res.send(clients);
  },

  post: (req, res, next) => {
    Client.create(req.body)
      .then(function (client) {
        res.send(client);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    Client.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function () {
        Client.findOne({ _id: req.params.id }).then(function (client) {
          res.send(client);
        });
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    Client.findByIdAndDelete({ _id: req.params.id })
      .then(function (client) {
        res.send(client);
      })
      .catch(next);
  },
};
