const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  userId: String
})

BlogSchema.statics.format = (blog) => {
  return {
    id: blog._id,
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes,
    user: blog.userId
  }
}

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog
