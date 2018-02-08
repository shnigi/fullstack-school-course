const bcrypt = require('bcrypt-nodejs')
const usersRouter = require('express').Router()
const User = require('../models/user')

const userIsUnique = async (username) => {
  const response = await User.find({username})
  return response.length === 0 ? true : false;
}

usersRouter.post('/', async (request, response) => {
  try {
    const body = request.body
    const uniqueUser = await userIsUnique(body.username);
    if (body.password.length > 3 && uniqueUser) {
      bcrypt.hash(body.password, null, null, async (err, passwordHash) => {

        const user = new User({
          username: body.username,
          name: body.name,
          passwordHash,
          adult: body.adult ? body.adult : true
        })

        const savedUser = await user.save()

        response.json(User.format(savedUser))
      })
    } else {
      response.status(409).json({ error: 'Username is not unique or password is too short' })
    }

  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

usersRouter.get('/', async (request, response) => {
  try {
    const users = await User.find({})
    response.json(users.map(User.format))
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = usersRouter
