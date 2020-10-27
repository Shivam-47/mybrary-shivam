const express = require('express')
const router = express.Router()
//const Author = require('../models/author')
//const Book = require('../models/book')

const bodyParser =  require('body-parser');
const Author = require('../models/author');
const urlEncoded = bodyParser.urlencoded({limit:'10mb', extended:false});


//All authors route//
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
      searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
      const authors = await Author.find(searchOptions)
      res.render('authors/index', {
        authors: authors,
        searchOptions: req.query
      })
    } catch {
      res.redirect('/')
    }
  })
  

// New authors route//
router.get('/new',function(req,res){
    res.render('authors/new', { author: new Author() });
});


//Create author route//
router.post('/',urlEncoded, async function(req,res){
    //res.send('New');
    const author = new Author({
        name: req.body.name
    });

    try {
        const newAuthor =  await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)
    } catch {
        res.render('authors/new',{
        author: author,
        errorMessage: 'Error creating author.'
            })
    }
});

module.exports =  router;