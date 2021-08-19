const Order = require('../models/order');

module.exports = {
  get: async (req, res, next) => {
    const order = await Order.find()
    .populate('client', 'clientName -_id')
    .populate('meal', 'mealName -_id');
    res.send(order);
  },

  post: (req, res, next) => {
    Order.create(req.body)
      .then(function (order) {
        res.send(order);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    Order.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function () {
        Order.findOne({ _id: req.params.id }).then(function (order) {
          res.send(order);
        });
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    Order.findByIdAndDelete({ _id: req.params.id })
      .then(function (order) {
        res.send(order);
      })
      .catch(next);
  },
};
