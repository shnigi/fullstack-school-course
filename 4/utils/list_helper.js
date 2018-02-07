const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  let likes = 0;
  blogs.map(blog => {
    likes += blog.likes;
  })
  console.log('LIKES', likes);
  return likes;
}

module.exports = {
  dummy,
  totalLikes
}
