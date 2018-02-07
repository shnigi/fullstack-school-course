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
  console.log('cleared')

  const blogObjects = initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('Blogs can be fetched', async () => {
  // await api
  //   .get('/api/blogs')
  //   .expect(200)
  //   .expect('Content-Type', /application\/json/)
  const response = await api
   .get('/api/blogs')

 expect(response.body.length).toBe(initialBlogs.length)
})

// test('New blog can be posted', async () => {
//   await api
//     .post('/api/blogs')
//     .expect(200)
//     .expect('Content-Type', /application\/json/)
// })

afterAll(() => {
  server.close()
})
