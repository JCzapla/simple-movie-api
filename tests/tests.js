

var should  = require("should"),
    request = require("request"),
    expect  = require("chai").expect,
    baseUrl = "",
    util    = require("util");


describe("/GET all movies", function(){
    it("gets list of all movies in db", function(done){
       request.get(baseUrl + "/movies", function(error, response, body){
           expect(response.statusCode.to.equal(200));
           expect(response.body.should.be.a('array'));
           done();
       }); 
    });
});


describe("/POST a movie", function(){
    it("it should not POST a movie without title", function(done){
        var empty_movie = {};
        var json_obj = JSON.parse(empty_movie);
        request.post({url: baseUrl + "/movies", form: json_obj}, function(error, response, body){
            expect(response.body.to.have("error"));
            done();
        }); 
    });
});


describe("/GET all comments", function(){
    it("should return list of all comments in db", function(done){
        request.get(baseUrl + "/comments", function(error, response, body){
            expect(response.statusCode.to.equal(200));
            expect(response.body.should.be.a('array'));
            done();
        });
   });
});


describe("/POST comment", function(){
    it("it should not POST a movie without title", function(done){
        var empty_comment = {};
        var json_obj = JSON.parse(empty_comment);
        request.post({url: baseUrl + "/comments", form: json_obj}, function(error, response, body){
            expect(response.body.to.have("error"));
            done();
        }); 
    }); 
});