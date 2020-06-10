const express = require('express')
const router = express.Router()
const conn = require('../db.js')

// Example route below...
// req.user.id will hold the current "logged in" user
router.get('/', (req, res, next) => {
  const id = req.user.id
  conn.query(`SELECT * FROM todos;`, [id], (err, results) => {
    console.log(results)
    res.json(results)
  })
  // res.json({ message: 'here!' })
})


let id = 1

router.get('./users', (req, res, next) =>{
  res.json(user)
})

router.get('./users/:id',(req, res, next) =>{
  const user = user.find(item => item.id === req.params.id)
  res.json(users)
})

router.delete('./users/:id', (req, res, next) =>{
  users = users.filter(item.id !== req.params.id)
  res.json(user)
})


module.exports = router