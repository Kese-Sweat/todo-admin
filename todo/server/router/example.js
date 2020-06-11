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

router.get('/todos/admin', (req, res, next) => {
  const id = req.user.id
  conn.query(`SELECT * FROM todos;`, [id], (err, results) => {
    console.log(err)
    console.log(results)
    res.json(results)
  })
  // res.json({ message: 'here!' })
})

module.exports = router