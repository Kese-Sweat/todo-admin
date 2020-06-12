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

router.get('/users', (req, res, next) => {
  const id = req.user.id
  conn.query(`SELECT * FROM users;`, [id], (err, results) => {
    console.log(results)
    res.json(results)
  })
})


router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id
  conn.query(`DELETE * FROM users WHERE id = ?;`, [id], (err, results) => {
    console.log(results)
    res.json(results)
  })
})





module.exports = router