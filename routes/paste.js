"use strict";
var express = require('express');
var router = express.Router();
var thinky = require("../connect");
var randomstring = require("randomstring");

router.get('/', function(req,res,next){
    res.redirect('/');
});

//TODO Add propper error handling
router.get('/:id', function(req,res,next){
     
        Paste.get(req.params.id).run().then(function(paste) {
        const texts = paste.text;
        const title = paste.title;
        const lang = ("language-"+paste.lang);
        console.log(texts);
        res.render('paste', { 
            title: title,
            text: texts,
            lang: lang
        });
    }).error(function(error) {
        // TODO Document not found, network errors etc.
        console.log("err");
    });
});
//TODO add proper error handling in callback and check db call
router.post("/submit", function(req,res,next){
    console.log(req.body.lang);
    //Get title async
    //TODO add error checing for the id
   let getId = () => {
        var id = randomstring.generate(8);
        return (Paste.get(id) !== null)  ? Promise.resolve(id) : getId();
        //return Promise.resolve(id)
    };
    //once promise resolved, render it to the page
    let render = id => {
        var paste = new Paste({
            id: id,
            title: req.body.title,
            text: req.body.text ,
            lang: req.body.lang
        });
        paste.save(function(error, doc) {
            if (error){
                console.log("error in submit")
                res.redirect("../error");
            } 
            else res.redirect("./"+id); 
        });
    }
    getId().then(render);
})



module.exports = router;
