const express = require('express')
const router = express.Router()
const Author = require('../models/author')
//const Book = require('../models/book')

//All authors route//
router.get('/',(req,res)=>{
    res.render('authors/index');
});

// New authors route//
router.get('/new',function(req,res){
    res.render('authors/new', { author: new Author() });
});


//Create author route//
router.post('/',function(req,res){
    //res.send('New');
    res.send(req.body.name); 
});

module.exports =  router;