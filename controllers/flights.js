var Flight = require('../models/flights');

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res){
  flight.find({}, function(err, flights){
    res.render(flights/index, {flights})
  });
}

function create(req, res) {
  
  for (let key in req.body) {
		if (req.body[key] === '') delete req.body[key];
 }
  
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}