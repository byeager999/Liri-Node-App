# liri-node-app

Liri node app solves the problem of finding band, song, and movie information in the terminal using node.js.

The app is organized with the main logic behind the search query and api calls contained in the liri.js file.  In order to hide the api keys I created a .gitignore file containing the Spotify, Bands In Town, and OMDB keys and accessed them through the keys.js file utilizing the export command and pulling the export into the liri.js file by using the require command.  The package.json files contain the npm manifests that were used in the making of this app.  

In order to use the app the user will have to access the terminal within the liri.js file and type in the following commands:

node liri spotify-this-song
This command provides song and artist information of the song included after this command

node liri movie-this
This command provides movie information of the movie included after the command

node liri concert-this
This command provides concert information of the artist included after the command

node liri do-what-it-says
This command reads what is included on the random.txt file using the file system npm module

Below is the link to my github repository where this app resides:
https://github.com/byeager999/Liri-Node-App-V2

Link to the video demo of the app
https://www.youtube.com/watch?v=Arp5d9xcszY

The technologies that were used in this app were:
node.js
javascript
Axios NPM
file system NPM 
Spotify NPM
Bands in Town NPM
Moment NPM
dotenv NPM
OMDB NPM

My role was that of the application developer for this application.
