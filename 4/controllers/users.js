const bcrypt = require('bcrypt-nodejs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  try {
    const body = request.body
    bcrypt.hash(body.password, null, null, async (err, passwordHash) => {

      const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
        adult: body.adult
      })

      const savedUser = await user.save()

      response.json(savedUser)
    })
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

const formatUser = (user) => {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    adult: user.adult
  }
}

usersRouter.get('/', async (request, response) => {
  try {
    const users = await User.find({})
    response.json(users.map(formatUser))
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = usersRouter
