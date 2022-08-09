const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);


mongoose.connect("mongodb+srv://dWhite:smR2mgBMewG7rEsT@cluster0.c2br7ih.mongodb.net/auralVoyage", {useNewURLParser: true, useUnifiedTopology: true})
    .then( () => {
        app.listen(3000, () => {
            console.log('listening on 3000');
        })
    })
