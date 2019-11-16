var Flight = require('../models/flight');

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
  req.body.nowShowing = !!req.body.nowShowing;
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  
  for (let key in req.body) {
		if (req.body[key] === '') delete req.body[key];
 }
  
  var movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.render('movies/new');
    console.log(movie);
    res.redirect('/movies');
  });
}

function newMovie(req, res) {
  res.render('movies/new');
}