var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	res.json(friends);
	});
	
	app.post("/api/friends", function(req, res) {/*The user will send an object to the server with this route from the front-end with a POST request using AJAX*/
	
	var bestMatch = {//an object that represents the best (friend) match based on the users answers
		name: "",
		photo: "",
		friendDifference: 1000 //used to track the differnece between the users answers and thier potential match
	};

	console.log(req.body);

//Here we take the result of the user's survey POST and parse it.
var userData = req.body; // create the user data from the requset.body coming from the user
var userScores = userData.scores; // we take the scores from the user data and assign it to its own variable called userScores

console.log(user.Scores); // THIS IS THE ISSUE, DOESNT KNOW WHAT THIS IS. LET'S FIGURE THIS OUT



var totalDifference = 0;/*This variable will calculate the difference between the user's scores and the scores of
each potential match in the database */

/*Nested for-loop (below:)
This for-loop targets the array of friends, looks at each friend object and loops through thier resepctive score array.
for (var i = 0; i < friends.length; i++) {/* Here we loop through all the friend possibilities in the database*/

	for (var i = 0; i < friends.length; i++) {

	console.log(friends[i]);
	totalDifference = 0;

	for (var j = 0; j < friends[i].scores[j]; j++) {/*We loop through all the scores of each friend */

		totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));/*We calculate the difference between
		the scores and sum them into the totalDifference variable.  Essentially, as we go through each score in the friend array we add the differnce to the variable 
		to the variable "totalDifference" which starts at zero (0).  
		So we subtract the userScore from a question from the (friends) score on a question and then run the Math.abs (math absoluate)
		function. Which means that if it's negative it turns in postive and if it's postive it stays positive. And finally thrugh each loop
		check if the totalDifference is less that the current friend difference reassign the name and the photo to that corresponding friend. So, we
		go through each friend in the array and replace them only if the difference is less that the current friend being checked.*/

		if (totalDifference <= bestMatch.friendsDifference) {/*conditional that say if the sum of the difference is less than
			the difference of the current "best match"*/

			/*(Below: resets the bestMatch variable to be the new friend*/
			bestMatch.name = friends[i].name;
			bestMatch.photo = friends[i].name;
			bestMatch.friendDifference = totalDifference;
		}
	}
}

friends.push(userData);/*Finally we save the user's data to the database (this must happen after the check.
otherwise, the database will always return the user is the user's best friend).*/

res.json(userData);/*We return the bestMatch object back to the front end of the application in JSON format.*/
});

}