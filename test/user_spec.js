var should= require("should");
var User = require('../models/user');
var assert= require("assert");

describe("User", function(){
    
    describe("defaults ", function(){
        var user ={};

        before(function(){
            user = new User({email:"test@gmail.com"});
        });

        it("email is test@gmail.com");
        it("has authetication token ");
        it("has timeout period ");
    });


});