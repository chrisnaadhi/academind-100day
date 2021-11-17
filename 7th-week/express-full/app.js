const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/restaurants', (req, res) => {
  res.render('restaurants');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/recommend', (req, res) => {
  res.render('recommend');
});

app.post('/recommend', (req, res) => {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurant.json');
  const fileData = fs.readFileSync(filePath);
  const storedRestaurant = JSON.parse(fileData);

  storedRestaurant.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurant));

  res.redirect('/confirm');
});

app.get('/confirm', (req, res) => {
  res.render('confirm');
});



app.listen(3000);