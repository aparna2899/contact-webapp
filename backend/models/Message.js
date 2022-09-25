var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema(
  {
    message: { type: String, required: true },
    contact: { type: String, required: true },
  },
  { timestamps: true }
);

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;
