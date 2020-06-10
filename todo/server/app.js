const express = require('express')
const app = express()
const exampleRoutes = require('./router/example')
const PORT = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let id
app.use('*', (req, res, next) => {
  req.user = {
    id: id
  }
  next()
})



// NOTE:
// this route is just to set the user id without
// not something we'd normally do in this manner
app.post('/api/fake-login', (req, res, next) => {
  id = req.body.id
  res.json({ message: 'set user fake login' })
})

app.use('/api', exampleRoutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})