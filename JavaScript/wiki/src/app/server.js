// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");
// Use MongoDB
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
// The database variable
var database;
// The products collection
var WIKI_COLLECTION = "test";

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// Local database URI.
const LOCAL_DATABASE = "mongodb://localhost:27017/app";
// Local port.
const LOCAL_PORT = 8080;

// Init the server
mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (error, client) {

        // Check if there are any problems with the connection to MongoDB database.
        if (error) {
            console.log(error);
            process.exit(1);
        }

        // Save database object from the callback for reuse.
        database = client.db();
        console.log("Database connection done.");

        // Initialize the app.
        var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
            var port = server.address().port;
            console.log("App now running on port", port);
        });
    });

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
/*  "/api/products"
 *  GET: finds all products
 */
app.get("/api/test", function (req, res) {
    database.collection(WIKI_COLLECTION).find({}).toArray(function (error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        }
    });
});


// Errors handler.
function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}

