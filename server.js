const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  const mongoose = require('mongoose')
  const Staff  = require('./models/staff')
  mongoose.connect('mongodb://mang:mang@ds119772.mlab.com:19772/inthanin');

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.post('/staff', (req, res) => {

    let { 
      fname, 
      nname, 
      facebook, 
      gen,
      interest,
      skill,
      camp,
      activity_favorite,
      suggestion,
      why
    } = req.body

    var db = new Staff({
        fullname: fname,
        nickName: nname,
        facebook,
        generation: gen,
        interest,
        skill,
        camp,
        activity_favorite,
        suggestion,
        why: why,
        createAt: new Date()
    })

    db.save((err) => {
        if (err) throw err

        res.send({added: true})
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on ${process.env.PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})