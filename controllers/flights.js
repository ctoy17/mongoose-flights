const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports ={
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight
};

function index(req, res){
    Flight.find({}, function(err, flights){
        if (err) return res.redirect('/');
        res.render('flights/index',{flights})
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {title: 'Flight Detail', flight, tickets});
        });
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

function deleteFlight(req, res){
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
        res.redirect('/flights');
    });
}

