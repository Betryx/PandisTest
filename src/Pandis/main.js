const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('pages'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));
app.get('/', (req, res) => {
    res.render("Landing")
})
app.get('/about', (req, res) => {
    res.render('aboutUs')
})
app.get('/contact', (req, res) => {
    res.render('contactUs')
})
app.get('/careers', (req, res) => {
    res.render('careers')
})
app.listen(3000)