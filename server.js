const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


app.prepare()
.then(() => {
  const server = express()

  const mongoose = require('mongoose')
  // const Staff  = require('./models/staff')
  const Admin  = require('./models/admin')
  const Student  = require('./models/student')
  const mongo = mongoose.connect('mongodb://mang:mang@ds119772.mlab.com:19772/inthanin');

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(session({ secret: 'keyboard cat' }));
  server.use(passport.initialize());
  server.use(passport.session());

  passport.use(new LocalStrategy(
    function(username, password, done) {
      Admin.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Admin.findById(id, function(err, user) {
      done(err, user);
    });
  });


  server.post('/student', (req, res) => {

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

    var db = new Student({
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
        pass: false,
        createAt: new Date()
    })

    db.save((err) => {
        if (err) throw err
        res.send({added: true})
    })
  })

  server.get('/student', (req, res) => {
    Student.find({}, (err, student) => {
      res.send({student})
    })
  })

  server.post('/pass', (req, res) => {

    Student.update(
      { _id: req.body.id }, 
      { $set: { pass: req.body.value} }, 
      (err, staff) => {
      res.send({passed: true})
    })
  })
  
  server.post('/admin', passport.authenticate('local', { 
    successRedirect: '/people',
    failureRedirect: '/admin',
  }))

  server.get('/people', authenticated, (req, res) => {
    app.render(req, res, '/people')
  })

  function authenticated(req, res, next) {
    if(req.isAuthenticated()) {
       return next();
    }

    res.redirect('/admin')
  }

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