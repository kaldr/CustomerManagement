{Mongo}=require 'meteor/mongo'
CustomerProfile=new Mongo.Collection 'CustomerProfile'#,{idGeneration:'MONGO'}
exports.CustomerProfile=CustomerProfile
