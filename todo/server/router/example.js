const express = require('express')
const router = express.Router()
const conn = require('../db.js')


router.get('/users', (req, res, next) => {
  const id = req.user.id
  conn.query(`SELECT * FROM users;`, [id], (err, results) => {
    console.log(results)
    res.json(results)
  })
})


router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id
  conn.query(`DELETE FROM users WHERE id = ?;`, [id], (err, results) => {
    console.log(results)
    res.json(results)
  })
})



router.post('/users', (req, res, next) => {
  const email = req.body.email
  console.log(email)
  conn.query(`INSERT INTO users (email, admin) VALUES (?, ?);` [email, true], (err, results) => {
    console.log(err)
    res.json({message: "user created"})
  })
})






module.exports = router