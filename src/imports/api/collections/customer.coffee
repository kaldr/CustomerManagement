{Mongo}=require 'meteor/mongo'
Parties=new Mongo.Collection 'parties'
exports["AccessLog"]=Parties
