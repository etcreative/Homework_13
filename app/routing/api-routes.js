var friends = require("../data/friends.js");

module.exports = function (app) {

	app.get("/api/friends", function(req, res) {
	res.json(friends);

	
	app.post("/api/friends", function(req, res) {
	
	var bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	};

	console.log(req.body);

//Here we take the result of the user's survey POST and parse it.
var userData = req.body;
var userScores = userData.scores;

console.log(user.Scores);



var totalDifference = 0;


for (var i = 0; i < friends.length; i++) {

	console.log(friends[i]);
	totalDifference = 0;


	for (var j = 0; j < friends[i].scores[j]; j++) {


 totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

 if (totalDifference <= bestMatch.friendsDifference) {

bestMatch.name = friends[i].name;
bestMatch.photo = friends[i].name;
bestMatch.friendDifference = totalDifference;

}
}
}

 


friends.push(userData);


res.json(userData);
});

}