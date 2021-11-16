const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const date = new Date();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime', (req, res) => {
  res.send(`
  <h1>${date.toLocaleDateString()}, ${date.toLocaleTimeString()}</h1>
  <p>back to <a href="/">home</a></p>
  `)
});

app.get('/', (req, res) => {
  res.send(`
  <form action="/store-user" method="POST">
    <label>Your Name:</label>
    <input type="text" name="username">
    <button>Submit</button>
  </form>
  <p>You can check <a href="/currenttime">time</a></p>
  `)
})

app.post('/store-user', (req, res) => {
  const userName = req.body.username;
  
  const filePath = path.join(__dirname, 'data', 'users.json')
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName)

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send(`
  <h1>Hello, ${JSON.stringify(userName)} is stored</h1>
  <p>check it <a href="/get-users">here</a></p>
  `)
})

app.get('/get-users', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'users.json')
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  let responseData = '<ul>';

  for (const user of existingUsers) {
    responseData += `<li>${user}</li>`;
  }

  responseData += '</ul>';

  res.send(`
  <h1>Here is your Data</h1>
  ${responseData}
  <p>back to <a href="/">home</a></p>
  `)
})

app.listen(3000)