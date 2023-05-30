
const express = require('express')
const app = express()
const port = 5500

// homepage
app.get('/', (request, response) => response.send(`
  <h1>'Hello World!'<h1>
  <a href='/contact'>Contact</a>
  <a href='/about'>About</a>
  <a href='/ourteam'>Ourteam</a>
  <a href='/products'>Products</a>
  `))


// contact page
app.get('/contact', (request, response) => response.send(`
  <h1>Contact</h1>
  <p>contact page</p>
  `))

// about page
app.get('/about', (request, response) => response.send(`
  <h1>About</h1>
  <p>about page</p>
  <a href='/ourteam'>Ourteam</a>
`));

// ourteam page
app.get('/ourteam', (request, response) => response.send(`
<h1>Ourteam</h1>
<p>our team page</p>
`))


// products page
app.get('/products', (request, response) => response.send(`
<h1>Products</h1>
<p>products page</p>
`))




// localhost:5500 - in browser
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


