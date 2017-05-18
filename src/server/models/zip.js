'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let zipSchema = new Schema({
    city: 'String',
    location: 'String',
    zip: 'String'
});

module.exports = mongoose.model('Zip', zipSchema);