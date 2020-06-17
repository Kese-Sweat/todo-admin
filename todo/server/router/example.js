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

router.delete('/todos/admin/:id', (req, res, next) => {
  const id = req.params.id
  conn.query(`DELETE FROM todos WHERE id = ?;`, [status, id], (err, results, fields) => {
    console.log(err)
    console.log(results)
    res.json(results)
  })
  // res.json({ message: 'here!' })
})

router.patch('/todos/admin/:id', (req, res, next) => {
  const status = req.body.status
  const id = req.params.id
  conn.query(`UPDATE todos SET status = ? WHERE id = ?,`, [id], (err, results) => {
    res.json(results)
  })
  // res.json({ message: 'here!' })
})


module.exports = router