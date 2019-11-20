const Ticket = require('../models/tickets');
const Flight = require('../models/flights');

module.exports = {
	new: newTicket,
	create
};

function newTicket(req, res) {
	res.render('tickets/new', { flightId: req.params.id });
}

function create(req, res) {
	flightId = req.params.id;
	req.body.flight = flightId;
	Flight.findById(req.params.id, function (err, ticket) {
	Ticket.create(req.body, function(err, ticket) {
	res.redirect(`/flights/${flightId}`);
	});
})
}
