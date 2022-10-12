const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
})
app.get('/about', (req, res) => {
//   res.send('Hello World!')
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
    res.sendFile(path.join(__dirname, '../frontend/public/about.html'));
})

app.listen(port, () => {
  console.log(`Our Ecommer App Listening On Port ${port}`)
})