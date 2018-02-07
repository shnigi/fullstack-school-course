const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/model')

const initialBlogs = [
  {
    "_id": "5a74d63f639c943b14e9da25",
    "title": "Harry Portter",
    "author": "Geijo",
    "url": "google.com",
    "likes": 4,
    "__v": 0
  },
  {
    "_id": "5a7adbe9e65bc32ff8ffb940",
    "title": "Testikamaa",
    "author": "Jokujambba",
    "url": "test.com",
    "likes": 2,
    "__v": 0
  }
]

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

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)

  const response = await api
    .get('/api/blogs')

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

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)

  const response = await api
    .get('/api/blogs')

  response.body.forEach(objekti =>
    expect(objekti).toHaveProperty('likes')
  )
})

afterAll(() => {
  server.close()
})
