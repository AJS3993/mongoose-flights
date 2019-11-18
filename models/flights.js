var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
airport: {
  type: String,
  enum: ['AUS', 'DAL', 'LAX', 'SEA']
},
arrival: {
  type: Date
}
});

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
airport: {
  type: String,
  enum: ['AUS', 'DAL', 'LAX', 'SEA'],
  default: 'SEA'
},
destination: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);