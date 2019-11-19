var Flight = require('../models/flights');
var Ticket = require('../models/tickets');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  })};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flights: flight._id}, function(err, tickets) {
    
    res.render('flights/show', { title: 'Flight Details', tickets, flight });
  });
  })
}

function create(req, res) {

  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}




