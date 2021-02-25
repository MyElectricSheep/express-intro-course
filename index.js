const express = require('express');
const bodyParser = require('body-parser');
const noodlesRouter =  require('./routes/noodlesRouter')

const app = express()
app.use(bodyParser.json())
app.use('/api/noodles', noodlesRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the Noodles API')
})

// Catch all route handler
app.all('*', (req, res) => {
    res.redirect('/');
  });

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})