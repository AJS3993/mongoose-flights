var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var flightSchema = new mongoose.Schema({
  flightNo: {
   type: Number,
  },
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  departure: {
  type: Date
}, 
});


module.exports = mongoose.model('Flight', flightSchema);