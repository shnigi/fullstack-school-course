const blogsRouter = require('express').Router()
const Blog = require('../models/model')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// const getTokenFrom = (request) => {
//   const authorization = request.get('authorization')
//   if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
//     return authorization.substring(7)
//   }
//   return null
// }

blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs.map(Blog.format))
    })
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body
  console.log('REQUEST', request.token);

  try {
    // const token = getTokenFrom(request)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    if (body === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const user = await User.findById(body.userId)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes === undefined ? 0 : body.likes,
      userId: user._id
    })

    const savedBlog = await blog.save()

    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.json(blog)
  } catch (exception) {
    console.log(exception)
    if (exception.name === 'JsonWebTokenError' ) {
       response.status(401).json({ error: exception.message })
     } else {
       console.log(exception)
       response.status(500).json({ error: 'something went wrong...' })
     }
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

blogsRouter.put('/:id', async (req, res) => {
  const response = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (response) {
    res.json(response)
  } else {
    res.status(400).send({ error: 'malformatted id' })
  }
})

module.exports = blogsRouter
