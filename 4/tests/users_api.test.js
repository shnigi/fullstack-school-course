const User = require('../models/user')
const supertest = require('supertest')
const { app } = require('../index')
const api = supertest(app)
const { initialBlogs, postAndGet, deleteBlog, usersInDb } = require('./test_helper')

describe('when there is initially one user at db', async () => {
  beforeAll(async () => {
    await User.remove({})
    const user = new User({ username: 'root', password: 'sekret', name: 'lel' })
    await user.save()
  })

  test('POST /api/users succeeds with a fresh username', async () => {
    const usersBeforeOperation = await usersInDb()

    const newUser = {
      username: 'shnigi',
      name: 'Niki Ahlskog',
      password: 'salainen'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAfterOperation = await usersInDb()
    expect(usersAfterOperation.length).toBe(usersBeforeOperation.length+1)
    const usernames = usersAfterOperation.map(u=>u.username)
    expect(usernames).toContain(newUser.username)
  })
})

describe('when new user with existing name is created', async () => {
  beforeAll(async () => {
    await User.remove({})
    const user = new User({ username: 'exists', password: 'sekret', name: 'lel' })
    await user.save()
  })

  test('create should fail', async () => {
    const usersBeforeOperation = await usersInDb()

    const newUser = {
      username: 'exists',
      name: 'exists',
      password: 'salainen'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(409)
      .expect('Content-Type', /application\/json/)

    const usersAfterOperation = await usersInDb()
    expect(usersAfterOperation.length).toBe(usersBeforeOperation.length)
    expect(result.body).toEqual({ error: 'Username is not unique or password is too short' })
  })
})

afterAll(() => {
  server.close()
})
