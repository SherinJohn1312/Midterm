// You need to define the schema for a reservation
// The fields you require are:
// associated user
// numOfOccupants (number of occupants)
// roomType (options are 'single bed', 'double bed', 'queen', 'king')
// checkIn (just date, not time)
// checkOut (just date, not time)

const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
   
  
    associatedUser: {
        type: String,
        required:true
      },   
 
  
  roomType: {
    type: String,
    required:true
  },
  checkIn: {
    type: String,
    required: true
  },
  checkOut: {
    type: String,
    required: true
  },
  numberOfOccupants: {
    type: Number,
    required: true
  },

  /*status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED'],
    default: 'DRAFT'
  }*/
}, {
  timestamps: true
});

// Query Helpers

ReservationSchema.virtual('reservationdetails')
.get(function () {
  return `${this.checkIn} ${this.checkOut}`;
});


/*
ReservationSchema.virtual('synopsis')
.get(function () {
  const post = this.content;
  return post
    .replace(/(<([^>]+)>)/ig,"")
    .substring(0, 250);
});
*/

module.exports = mongoose.model('Reservation', ReservationSchema);