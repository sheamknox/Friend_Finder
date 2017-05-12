var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../')
        });
    });

    app.get("/survey", function(req, res) {
        res.sendFile('survey.html', {
            root: path.join(__dirname, '../')
        });
    });


    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../')
        });
    });

};