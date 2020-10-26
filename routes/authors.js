const express = require('express')
const router = express.Router()
const bodyParser =  require('body-parser');
const Author = require('../models/author')
//const Book = require('../models/book')

//var bodyParser=require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended:false});


//All authors route//
router.get('/',(req,res)=>{
    res.render('authors/index');
});

// New authors route//
router.get('/new',function(req,res){
    res.render('authors/new', { author: new Author() });
});


//Create author route//
router.post('/',urlEncoded,function(req,res){
    //res.send('New');
    res.send(req.body.name); 
});

module.exports =  router;