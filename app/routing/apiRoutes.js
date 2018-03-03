var friendData    = require('../data/friend.js');
var path      = require('path');

// API GET Requests - when users "visit" a page. 
// (ex:localhost:PORT/api/admin...they are shown a JSON of the data in the table) 

var totalDifference = 0;

module.exports = function(app){
  app.get('/api/friend', function(req, res){
    res.json(friend);
  });

//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array


  app.post('/api/friend', function(req, res){

    var goodMatch = {
      name: "",
      matchDifference: 1000
    };
    var userData   = req.body;
    var userName   = userData.name;
    var userScores   = userData.scores;

    var totalDifference = 0;

    //loop through the friend data array of objects to get each friend scores
    for(var i = 0; i < [friend].length-1; i++){
      console.log(friend[i].name);
      totalDifference = 0;

      //loop through that friend score and the users score and calculate the 
      // absolute difference between the two and push that to the total difference variable set above
      for(var j = 0; j < 10; j++){
        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friend[i].scores[j]));
        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= goodMatch.friendDifference){

          // Reset the bestMatch to be the new friend. 
          goodMatch.name = friend[i].name;
          goodMatch.matchDifference = totalDifference;
        }
      }
    }

    friend.push(userData);
 
    res.json(goodMatch);
  });
};