const Meal = require('../models/meal');

module.exports = {
  get: async (req, res, next) => {
    const meals = await Meal.find().catch(next);
    res.send(meals);
  },

  post: (req, res, next) => {
    Meal.create(req.body)
      .then(function (meal) {
        res.send(meal);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    Meal.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function () {
        Meal.findOne({ _id: req.params.id }).then(function (meal) {
          res.send(meal);
        });
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    Meal.findByIdAndDelete({ _id: req.params.id })
      .then(function (meal) {
        res.send(meal);
      })
      .catch(next);
  },
};
