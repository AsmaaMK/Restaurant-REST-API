const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  mealName: {
    type: String,
    required: [true, 'Meal Name is required'],
  },
  mealPrice: {
    type: Number,
    required: [true, 'Meal Price is required'],
  }
});

const Meal = mongoose.model('Meal', MealSchema);
module.exports = Meal;