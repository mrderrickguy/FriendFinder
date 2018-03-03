// Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var PORT = process.env.PORT||3000;
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or 
// request data from various URLs. 
// ================================================================================

require('../routing/apiRoutes.js')(app); 
require('../routing/htmlRoutes.js')(app);


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});