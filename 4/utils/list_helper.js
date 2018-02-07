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

const mostBlogs = (blogs) => {
  const appeared = [];
  blogs.map(blog => {
    const author = appeared.find((item) => item.author === blog.author);
    if (author === undefined) {
      appeared.push({
        author: blog.author,
        blogs: 1
      })
    } else {
      author.blogs++;
    }
  })
  return appeared.reduce((a, b) => a.blogs > b.blogs ? a : b);
}

const writerWithMostLikes = (blogs) => {
  const appeared = [];
  blogs.map(blog => {
    const author = appeared.find((item) => item.author === blog.author);
    if (author === undefined) {
      appeared.push({
        author: blog.author,
        likes: blog.likes
      })
    } else {
      author.likes += blog.likes;
    }
  })
  return appeared.reduce((a, b) => a.likes > b.likes ? a : b);
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  writerWithMostLikes
}
