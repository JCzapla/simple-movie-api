var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    routes      = require("./routes/routes.js");
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/movie_api");


app.listen(process.env.PORT, process.env.IP);

module.exports = app;