var Flight = require('../models/flights');

module.exports = {
  create
};

function create(req, res) {
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  
  Flight.findById(req.params.id, function(err, flight) {
    flight.destination.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}