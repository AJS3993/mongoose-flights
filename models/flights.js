var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
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
reviews: [reviewSchema]
});


module.exports = mongoose.model('Flight', flightSchema);