const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId, ref:'Client',
    required: [true, 'client ID is required'],
  },
  meal: {
    type: mongoose.Schema.Types.ObjectId, ref:'Meal',
    required: [true, 'meal ID is required'],
  }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;