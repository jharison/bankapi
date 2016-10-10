var _ = require('lodash');
var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({

firstname: {type:String, required:true},
lastname: {type:String, required:true},
adresse: {type:String}

});

var Customer = mongoose.mode("Customer", customerSchema);

module.exports = Customer;
