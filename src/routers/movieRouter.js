const router = require('express').Router()
const conn = require('../connection/connection')


// Add movies
router.post('/addmovies', (req, res) => {
    const {nama, tahun, deskripsi} = req.body;
    const sql = `insert into movies (nama, tahun, deskripsi) 
                 values ('${nama}', ${tahun}, '${deskripsi}')`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        res.send(result)
    })
})


// Edit movies
router.patch('/editmovies/:id', (req, res) => {
    const sql = `update movies set ? where id = ?`
    const data = [req.body, req.params.id]

    conn.query(sql, data, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})

// Delete movies
router.delete('/deletemovies/:id', (req, res) => {
    const sql = `delete from movies where id = ?`
    const data = req.params.id

    conn.query(sql, data, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})

// Show all movies
router.get('/allmovies', (req, res) => {
    const sql = `select * from movies`

    conn.query(sql, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})



module.exports = router