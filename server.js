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
  const mongo = mongoose.connect('mongodb://mang:mang@ds119772.mlab.com:19772/inthanin');

  var schema = new mongoose.Schema({ 
    firstName: 'string',
    lastName: 'string',
    nickName: 'string',
    why: 'string',
    createAt: Date
  });
  var Form = mongoose.model('Form', schema);

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.post('/post', (req, res) => {
    
    let { name, lname, nname, why } = req.body

    var db = new Form({
        firstName: name,
        lastName: lname,
        nickName: nname,
        why: why,
        createAt: new Date()
    })

    db.save((err) => {
        if (err) throw err

        console.log('saved')
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8000, (err) => {
    if (err) throw err
    console.log('> Ready on 8000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
