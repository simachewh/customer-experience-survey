/**
 * Created by Simachew on 27-Aug-16.
 */

var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();

//Handle cross-origin resource sharing
app.use(function (req, res, next) {
    rres.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With,content-type, Authorization');
    next();
});

//setting root location to serve public assets
app.use(express.static(_dirname + "/"));

app.get("*", function (req, res) {
    res.sendFile(path.join(_dirname + "/index.html"))
});

var listener = app.listen(Number(process.env.PORT || 8080));
require("util").log("Starting server at " + listener.address().port);