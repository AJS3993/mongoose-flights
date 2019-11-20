var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
airport: {
  type: String,
  enum: ['AUS', 'DAL', 'LAX', 'SEA'],
},
arrival: {
  type: Date,
  default: Date.now
  }
});

var flightSchema = new mongoose.Schema({
  flightNo: {type: Number, min: 10, max: 9999, default: 100
  },
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  departure: {
  type: Date,
  default: Date.now
},
airport: {
  type: String,
  enum: ['AUS', 'DAL', 'LAX', 'SEA']
},
destination: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);