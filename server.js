const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const pagesRoute = require('./controller/pages');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRoute);
// 404 error catch
app.use( (req, res, next) => {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
})

// olde style
/*
mongoose.connect("mongodb+srv://aaoro:amanacity@cluster0.uuofk7n.mongodb.net/AuralVoyage", {useNewURLParser: true, useUnifiedTopology: true})
    .then( () => {
        app.listen(3000, () => {
            console.log('Database connected, server listening on 3000');
        })
    })
*/

//the following is attempt to convert according to MVC
/*app.listen(3000, () => {
    console.log('listening on 3000');
})
*/

//?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://aaoro:amanacity@cluster0.uuofk7n.mongodb.net/auralVoyage", {useNewURLParser: true, useUnifiedTopology: true, /*useFindAndModify: false*/})
    .then( () => {
        app.listen( (process.env.PORT || 3000), () => {
            console.log('Database connected, server listening on 3000');
        })
    })