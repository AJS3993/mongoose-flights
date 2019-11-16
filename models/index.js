var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
   type: Number,
   default: function() {
    return new Date().getFullYear();
   },
   min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  cast: [String],
  nowShowing: {type: Boolean, 
    default: true}
}, {
  timestamps: true
});


module.exports = mongoose.model('Movie', movieSchema);