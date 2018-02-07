const Blog = require('../models/model')
const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)

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

const postAndGet = async(newBlog) => {
  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(200)

  return response = await api
    .get('/api/blogs')
}

module.exports = {
  initialBlogs, postAndGet
}
