var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	elasticsearch = require("elasticsearch"),
	twitter = require("twitter");

// elastic search
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.search({
	index: 'test2',
	q: 'title: tweet' 	 
}, function (error, response) {
  // ...
  if (error){
  	console.log(error);
  } else{
  	console.log(response);
  }
  
});