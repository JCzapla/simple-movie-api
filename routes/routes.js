var express     = require("express"),
    router      = express.Router(),
    request     = require("request"),
    Movie       = require("../models/movie.js"),
    Comment     = require("../models/comment.js");
    


router.get("/", function(req, res){
   res.render("index");
});


router.post("/movies", function(req, res){
    if(!req.body.title){
        return res.send({"error": "title is required"});
    }
    request("http://www.omdbapi.com/?apikey=47a89fd6&t=" + req.body.title, function(error, request, body){
        if(error){
            return console.dir(error);
        }
        var newMovie = JSON.parse(body);
        if(!body){
            res.send("Movie with given title haven't been found.")
        }
        Movie.create(newMovie, function(error, newlyCreatedMovie){
           if(error){
               return console.dir(error);
           }
           res.send(newMovie);
        });
    });
});


router.get("/movies", function(req, res){
    Movie.find({}, function(error, movies){
        if(error){
            return console.dir(error);
        }
       res.send(movies); 
    });
});


router.post("/comments", function(req, res){
    Movie.findById(req.body.id, function(error, foundMovie){
        if(error){
            return console.dir(error);
        }
        var cmt = { text: req.body.comment};
        if(!cmt){
            return res.send({"error": "comment body is required"});
        }
        Comment.create(cmt, function(error, newlyCreatedComment){
            if(error){
                return console.dir(error);
            }
            foundMovie.comments.push(newlyCreatedComment);
            foundMovie.save();
            res.send(newlyCreatedComment);
        });
    });
});


router.get("/comments", function(req, res){
        Comment.find({}, function(error, comments){
            if(error){
                return console.dir(error);
            }
            res.send(comments); 
        });   
});


router.get("/comments/:id", function(req, res){
    Movie.findById(req.params.id).populate("comments").exec(function(error, foundMovie){
           res.send(foundMovie.comments); 
        });
});


module.exports = router;