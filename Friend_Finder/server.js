/* notes about our folder structure for the homework
Inside the friend folder we an app folder.  
The app folder will hold the data will hold our data stored in
our server which contains all the data we will be using such the different friends
someone could be matched up with.
The public folder will contain all of the HTML files we want to show to our client
The routing folders will include the routes to the HTML files to deliver to clients, 
as well as the data that delivers from the front to the back-end and vice verse.
*/


//* dependencies - npm packages "express", "bodyParser"
var express = require("express");
var app = express();//* we have a variable set to the express library
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;//* we set a variable to our PORT 8080

/*create application/JSON parser
var jsonParser = bodyParser.json()*/

//create application/x-www-form-urlencoded parser
/*(bodyParser - below)helps body parser translate the communication from the back to the front-end */
app.use(bodyParser.urlencoded({ extended: true }));

//parse various different custom JSON types as JSON using bodyParser app
app.use(bodyParser.json({ type: "application/*+json"}))

//parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))

//parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});