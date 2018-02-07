const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  let likes = 0;
  blogs.map(blog => {
    likes += blog.likes;
  })
  return likes;
}

const favoriteBlog = blogs => blogs.reduce((a, b) => a.likes > b.likes ? a : b);

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
