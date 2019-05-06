const router = require('express').Router()
const conn = require('../connection/connection')

// Add categories
router.post('/addcategories', (req, res) => {
    const {nama} = req.body;
    const sql = `insert into categories (nama) 
                 values ('${nama}')`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        res.send(result)
    })
})

// Edit categories
router.patch('/editcategories/:id', (req, res) => {
    const sql = `update categories set ? where id = ?`
    const data = [req.body, req.params.id]

    conn.query(sql, data, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})

// Delete category
router.delete('/deletecategories/:id', (req, res) => {
    const sql = `delete from categories where id = ?`
    const data = req.params.id

    conn.query(sql, data, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})

// Show all category
router.get('/allcategories', (req, res) => {
    const sql = `select * from categories`

    conn.query(sql, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})

module.exports = router