var Mongo, Parties;

Mongo = require('meteor/mongo').Mongo;

Parties = new Mongo.Collection('parties');

exports["AccessLog"] = Parties;
