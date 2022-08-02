const express = require('express')

const app = express()

app.listen('3000')

let author = "Clayton"

// DELETE
app.route('/:identificador').delete( (req, res) => {
    author = ''
    res.send(req.params.identificador)
})








// ===========================================
// PUT
// let author = "Clayton"
// app.use(express.json())

// app.route('/').put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// } )


// ============================================
// POST
//middleware
// app.use(express.json())


// app.route('/').post((req, res) => res.send(req.body))
// ====================================================
// GET
// app.route('/').get( (req, res) => res.send('hello'))
// app.route('/sobre').get( (req, res) => res.send('hello sobre'))