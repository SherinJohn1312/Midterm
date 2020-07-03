const { index, show, new: _new, edit, create, update, delete: _delete } = require('../controllers/ReservationsController');


/*
function auth (req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('danger', 'You need to login first.');
    return res.redirect('/login');
  }
  next();
}
*/

module.exports = router => {
  // put your routes here

  router.get('/reservations', index); // authenticated
  router.get('/reservations/new', _new); // authenticated
  
  router.post('/reservations', create); // authenticated
  router.post('/reservations/update', update); // authenticated
  router.post('/reservations/delete', _delete); // authenticated
  
  router.get('/reservations/:id/edit', edit); // authenticated
  router.get('/reservations/:id', show); // authenticated
  



};