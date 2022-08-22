const connecectTOMongo=require('./db');

connecectTOMongo();
// npm i -D nodemon

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hey Muhammad Uzair Welcome to React!')
})

// api is must
// app.get('/api/darkcoderz/signup', (req, res) => {
//   res.send('Hey Sign Up!')
// })





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})