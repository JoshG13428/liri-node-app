var keys = "keys.js"

var argOne = process.argv[2]
var argTwo = process.argv[3]

var spotify = {
song: "",
songName:"",
preview:"",
album:"",

}

var movie = {

title:"",
year:"", 
rating:"",	
country:"",
language:"",	
plot:"", 
actorsnumber: 0,
actors: "",
rottenrating:0;
rottenurl:"",

}

if (argOne == "my-tweets")
{
	console.log(var client = new Twitter({
});)
}


if (argOne == "spotify-this-song")
	console.log(lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
{
	console.log("my tweets")
}

if (argOne == "movie-this")
{
	console.log(var client = new Twitter({
});)
}

if (argOne == "do-what-it-says")
{
	console.log(request('http://www.google.com', function (error, response, body) {{
});)
}
lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
get: function(query, hollaback)






var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

http://img.omdbapi.com/?apikey=[yourkey]&