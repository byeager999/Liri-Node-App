require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs"); 

var spotify = new Spotify(keys.spotify);


var command = process.argv[2];
var query = process.argv.slice(3).join(" ");

function concertThis(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.bandsInTown.id)
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("=============================")
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city);
                console.log(response.data[i].venue.country);
                console.log(response.data[i].datetime);
                console.log("=============================")
            }
        }); 
}
function spotifyThisSong(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songInfo = data.tracks.items[0];

        console.log(songInfo.artists[0].name);
        console.log(songInfo.name);
        console.log(songInfo.album.external_urls.spotify);
        console.log(songInfo.album.name);

    });
}
function movieThis(title) { 
    axios.get("http://www.omdbapi.com/?apikey=" + keys.omdb.id + "&t=" + title)
        .then(function (response) {

            var movieInfo = response.data;

            console.log(movieInfo.Title);
            console.log(movieInfo.Year);
            console.log("IMDB Rating: " + movieInfo.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movieInfo.Ratings[1].Value);
            console.log(movieInfo.Country);
            console.log(movieInfo.Language);
            console.log(movieInfo.Plot);
            console.log(movieInfo.Actors);

    }); 
}
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data)
        
    });
    
}


switch (command) {
    case "concert-this":
        concertThis(query);
        break;
    case "spotify-this-song":
        spotifyThisSong(query);
        break;
    case "movie-this":
        movieThis(query);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;

} 



