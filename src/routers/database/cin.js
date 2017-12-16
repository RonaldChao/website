const Schema = require('mongoose').Schema
const Abstract = require('./abstract')


//* _*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
// Schema Definition
//* _*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
let cinObject = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, default: ''},
  geo: { type: Array, default: [-1, -1] },
  tags: { type: Array, default: [] },
  tel: { type: String, default: ''},
  createdAt: { type: Date, default: Date.now },
})

cinObject.pre('save', function (next) {
  this.updatedAt = Date.now();
  next()
})

const cinModel = new Abstract('Cin', cinObject)

module.exports = cinModel