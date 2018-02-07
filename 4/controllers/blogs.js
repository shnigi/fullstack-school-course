const blogsRouter = require('express').Router()
const Blog = require('../models/model')

blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogsRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    if (body === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes === undefined ? 0 : body.likes,
    })

    const savedBlog = await blog.save()
    response.json(blog)
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

blogsRouter.delete('/:id', async (req, res) => {
  const response = await Blog.findByIdAndRemove(req.params.id, { __v: 0 })
    if (response) {
      res.status(204).end()
    } else {
      res.status(400).send({ error: 'malformatted id' })
    }
})

module.exports = blogsRouter
