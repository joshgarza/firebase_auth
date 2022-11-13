const models = require('../models');

const userControllers = {
  loginUser: (req, res) => {
    let user = {
      email: req.query.email,
      id: req.query.firebaseId
    }
    models.getUser(user, (err, data) => {
      if (err) {
        console.log('Error getting user info', err)
        res.status(404).end()
      }
      res.status(200).send(data)
    })
  },
  createUser: (req, res) => {
    let user = {
      email: req.body.params.email,
      id: req.body.params.firebaseId,
      userType: req.body.params.userType
    }
    models.createUser(user, (err, data) => {
      if (err) {
        console.log('Error creating user', err)
        res.status(404).end()
      }
      res.status(201).end()
    })
  }
}

module.exports.userControllers = userControllers;