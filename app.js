const express = require('express')
const app = express()
// app.get('/', (req, res) => {
  // res.send('Hello from Gazoo API app.js file in Amazon, in repo!')
// })
// app.listen(3000, () => console.log('Server running on port 3000'))
app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
