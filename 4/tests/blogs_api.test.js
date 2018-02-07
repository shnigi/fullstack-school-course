const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/model')
const { initialBlogs, postAndGet } = require('./test_helper')

beforeAll(async () => {
  await Blog.remove({})

  const blogObjects = initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('Blogs can be fetched', async () => {
  const response = await api
   .get('/api/blogs')

 expect(response.body.length).toBe(initialBlogs.length)
})

test('A new valid blog can be added ', async () => {
  const newBlog = {
    "title": "Uusi vastalisätty",
    "author": "Niki",
    "url": "kala.com",
    "likes": 1,
  }

  const response = await postAndGet(newBlog)

  const contents = response.body.map(r => r.title)

  expect(response.body.length).toBe(initialBlogs.length + 1)
  expect(contents).toContain('Uusi vastalisätty')
})

test('Blog post without likes get default value 0', async () => {
  const newBlog = {
    "title": "Toinen vastalisätty",
    "author": "Jee",
    "url": "jee.com",
  }

 const response = await postAndGet(newBlog)

  response.body.forEach(objekti =>
    expect(objekti).toHaveProperty('likes')
  )
})

afterAll(() => {
  server.close()
})
