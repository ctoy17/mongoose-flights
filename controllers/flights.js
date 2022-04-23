const Flight = require('../models/flight');

module.exports ={
    index,
    new: newFlight,
    create
};

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index',{flights})
        });
}

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res){
    if (req.body.departs === '') delete req.body.departs;
	Flight.create(req.body);
	console.log(req.body);
	res.redirect('flights');
}