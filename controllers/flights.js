var Flight = require('../models/flights');
var Ticket = require('../models/tickets');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, function(err, flight) {
    res.render('flights/index', { title: 'All Flights', flight });
  })};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, ticket) {
    console.log(ticket)
    res.render('flights/show', { title: 'Flight Details', flight, ticket });
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




