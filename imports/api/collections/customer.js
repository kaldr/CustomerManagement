var CustomerProfile, Mongo;

Mongo = require('meteor/mongo').Mongo;

CustomerProfile = new Mongo.Collection('CustomerProfile');

exports.CustomerProfile = CustomerProfile;
