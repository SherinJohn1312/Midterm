// You need to complete this controller with the required 7 actions

const viewPath = ('reservations');
const Reservation = require('../models/reservation');


//const User = require('../models/user');

exports.index =async(req, res) => {
  const reservations =await Reservation.find();
  res.render(`${viewPath}/index`, {
    pageTitle: 'Archive',
    reservations: reservations
  });
  
};

exports.show = async(req, res) => {
  console.log(req.params);
  const reservation = await Reservation.findById(req.params.id)
  //console.log(reservation);
  res.render(`${viewPath}/show`,
  {
    pageTitle: reservation.title,
    reservation: reservation
  })
  res.send(`Hi Show`)
};


exports.new = (req, res) => {
res.render(`${viewPath}/new`,
{pageTitle: ` New Reservation`})
};

exports.create = async (req, res) => {
  console.log(req.body);
  try{
    const reservation = await Reservation.create(req.body)
    res.redirect(`/reservations/${reservation.id}`);
  }catch(error) {
    res.send(err);
  }
  
  
  
 
}; 

exports.edit = (req, res) => {
  res.render(`Hi edit`)
};

exports.update =  (req, res) => {
  res.render(`Hi update`)
};

exports.delete =  (req, res) => {
  res.render(`Hi delete`)
};
