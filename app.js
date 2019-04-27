const express = require('express');
const path = require('path');
const engines = require('consolidate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb')
    .then(() => console.log('Connected db...'))
    .catch(err => console.log('Could not connect to MongoDB...', err));

const app = express();
let User = require('./src/models/user');

app.use(express.static(__dirname + '/src'));
app.set('views', path.join(__dirname + '/src/html'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if(err){
            console.log(err);
        } else {
            res.render('test.html', {
                users: users
            });
        }
    })
});

app.get('/registration', function (req, res) {
    res.render('register.html');
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});