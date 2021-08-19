const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  clientName: {
    type: String,
    required: [true, 'Name is required'],
  },
  clientAddress: {
    type: String,
  },
  clientPhone: {
    type: String,
  },
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;