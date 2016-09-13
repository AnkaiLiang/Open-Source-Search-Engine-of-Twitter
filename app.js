var express = require("express"),
	app = express(),
	//bodyParser = require("body-parser"),
	elasticsearch = require("elasticsearch"),
	twitter = require("twitter"),
	request = require("request");

// var documents = require('documents');
// app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// elastic search
// var client = new elasticsearch.Client({
//   host: 'localhost:9200',
//   log: 'trace'
// });




// twitter setting
// var TwitterClient = new twitter({
// 	consumer_key: 'OOyRcGXSBXJDvKpM3PTyTAYXO',
// 	consumer_secret:'BKvSeyCyDfRNILdp2tWqSXPPkNdqYfzDzQxxVVaDcQAev6BN3K',
// 	access_token_key: '589686559-1LIYZQY3cVstSEtRwWzmR2Zvbi5OR6CKzj8GJL91',
// 	access_token_secret: 'Vsp1f9o7at2eIav9IvLxr9bVdSQW4ksH8lWEfSWPC7n2N'
// });

// stream API
// Callback function 
// TwitterClient.stream('statuses/filter', {track: 'api'}, function(stream){
// 	stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//    });
// });





// temp store
//var storedTweets = [];


// // search API
// TwitterClient.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//    //console.log(tweets);

// 	var id_ = 1;
// 	var count = 1;
//    tweets.statuses.forEach(function(tweet){
//    		//storedTweets.push(tweet);

//    		client.create({
// 		index: 'test2',
// 		type: 'testType2',
// 		id: id_++,
// 		body: {
// 			title: 'tweet',
// 			text: "gagaga",
// 			source: tweet.source,
// 			tags: ['y'],
// 			published: true,
// 			published_at: tweet.created_at,
// 			counter: count++
// 			}
// 		}, function(error, response){
// 			if (error){
// 				console.log(error);
// 			} else {
// 				console.log(response);
// 			}
// 		})
//    });
// });





// for (var i = 4; i < 7; i++){
// 	client.create({
// 	index: 'test1',
// 	type: 'testType1',
// 	id: i,
// 	body: {
// 		title: 'test 1',
// 		text: "gagaga",
// 		source: "tweet.source",
// 		tags: ['y'],
// 		published: true,
// 		published_at: '2016-01-01',
// 		counter: count++
// 		}
// 	}, function(error, response){
// 		if (error){
// 			console.log(error);
// 		} else {
// 			console.log(response);
// 		}
// 	})
// }

// storedTweets.forEach(function(tweet){
// 	client.create({
// 	index: 'test2',
// 	type: 'testType2',
// 	id: id_++,
// 	body: {
// 		title: 'tweet',
// 		text: "gagaga",
// 		source: tweet.source,
// 		tags: ['y'],
// 		published: true,
// 		published_at: tweet.created_at,
// 		counter: count++
// 		}
// 	}, function(error, response){
// 		if (error){
// 			console.log(error);
// 		} else {
// 			console.log(response);
// 		}
// 	})
// })


// 
app.get("/", function(req, res){
	res.render("search.ejs");
});

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "http://localhost:9200/logstash_twitter_dev/_search?q=" + query;
	
	request(url, function(error, response, body){
			var bodyObj = JSON.parse(body);
			res.render("results.ejs", {data: bodyObj, keyword: query});
		
	});
});





var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
