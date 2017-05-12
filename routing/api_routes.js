var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        myScore = newFriend.scores;
        // Array for sum of differences
        var diffs = [];
        // placeholder for smallest number
        var smallNum = 0;
        // placeholder for index of smallest number
        var smallIndex = 0;
        // user's score is always last
        // for each instance
        for (i = 0; i < (friends.length - 1); i++) {
            // placeholder for sum of all differences
            var differences = 0;
            // for each score in each house
            for (j = 0; j < friends[i].scores.length; j++) {
                // find the difference between user score and friends score
                differences += (Math.abs(parseInt(myScore[j]) - friends[i].scores[j]));
            }
            // push total differences to array diffs
            diffs.push(differences);
            // finding smallest difference
            // if differences value is less than smallest number or it is the first value in array
            if (differences < smallNum || i === 0) {
                // set smallNum to differences
                smallNum = differences;
                // set smallIndex to current index
                smallIndex = i;
            }
        };
        // return friend of calculated smallest index 
        res.json(friends[smallIndex]);
    })
}