const router = require('express').Router()
const conn = require('../connection/connection')

// Add connection
router.post('/addconnection', (req, res) => {
    const data = req.body
    const sql = `insert into movcat set ?`
    const sql2 = `select m.nama as nama_film, c.nama as nama_kategori from movies m
                  join movcat mo on m.id = mo.movie_id
                  join categories c on c.id = mo.category_id`

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, data, (err, result) => {
            if(err) return res.send(err.sqlMessage)

            res.send(result)
        })
    })
})

// Delete connection
router.delete('/deleteconnection/:id', (req, res) => {
    const id = req.params.id
    const sql = `delete from movcat where id = ?`
    const sql2 = `select m.nama as nama_film, c.nama as nama_kategori from movies m
                  join movcat mo on m.id = mo.movie_id
                  join categories c on c.id = mo.category_id`

    conn.query(sql, id, (err, result) => {
        if(err) return res.send(err.sqlMessage)


        conn.query(sql2, id, (err, result) => {
            if(err) return res.send(err.sqlMessage)

            res.send(result)
        })
    })
})


module.exports = router