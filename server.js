const express = require('express');
const app = express();
const expressLayouts =  require('express-ejs-layouts')
const indexRouter = require('./routes/index');


if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout', 'layouts/layouts');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/',indexRouter);


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}) 
const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', ()=> console.log('Connected to MongoDB'))



app.listen(process.env.PORT || 3000);


//22ahLiYM4uhpWfA3/