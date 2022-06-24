import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
    required: true,
  },
  flightNo: {
    type: Number,
    requried: true, 
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
}, {
  timestamps: true
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}