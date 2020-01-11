var Flight = require('../models/flights');
var Ticket = require('../models/tickets');

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  delete: deleteFlight
};

function index(req, res) {
  Flight.find({}, function(err, flight) {
    res.render('flights/index', { title: 'All Flights', flight });
  })};

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, ticket) {
    res.render('flights/show', { title: 'Flight Details', flight, ticket });
  });
  })
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
  res.render('flights/new', { title: 'Add Flight' });
}

function deleteFlight(req, res) {
  Flight.findById(req.params.id, function(err, flight){
  flight.deleteOne(function(err) {
    res.redirect(`/flights/`);
  })
})
}