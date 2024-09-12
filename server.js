import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date'
import viewEngine from './viewEngine';
const app = express();
viewEngine(app)
const port = process.env.PORT

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); 
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/date', (req, res) => {
    res.send(myDateTime());
});

app.get('/ejs', (req, res) => {
    res.render("test")
});