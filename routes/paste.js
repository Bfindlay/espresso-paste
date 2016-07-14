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
        console.log(texts);
        res.render('paste', { 
            title: title,
            text: texts
        });
    }).error(function(error) {
        // TODO Document not found, network errors etc.
        console.log("err");
    });
});
//TODO add proper error handling in callback
router.post("/submit", function(req,res,next){
    const id = getId();
    var paste = new Paste({
        id: id,
        title: req.body.title,
        text: req.body.text 
    })
    paste.save(function(error, doc) {
        if (error) console.log(error);
        else console.log("saved!"); 
    });
    res.redirect("./"+id);
})

let getId = () => { 
    let n = randomstring.generate(6);
    return (Paste.get(n) !== null)  ? n : getId();
}

module.exports = router;
