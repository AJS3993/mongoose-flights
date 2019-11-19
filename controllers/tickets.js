var Ticket = require('../models/tickets');
var Flight = require('../models/flights');

module.exports = {
  new: newTicket,
  create,
  addTicket
};

function addTicket(req, res) {
  Flight.findById(req.params.id, function (err, ticket) {
    ticket.flight.push(req.body.ticketId);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`/flights/${ticket.flight}`);
  });
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new'), { title: 'Add Ticket',
      flight
    };
  })
}