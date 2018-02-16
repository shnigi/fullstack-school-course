import React from 'react'
import BlogService from '../services/blogs.js'

class Blog extends React.Component {
  constructor(props) {
    console.log('PROPSIT', props);
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
  }

  like = async (blog) => {
    const updatedBlog = {...blog}
    updatedBlog.likes++
    const update = await BlogService.update(blog.id, updatedBlog);
  }

  remove = async (blog) => {
    const token = this.props.user.token
    if (window.confirm("Poista?") == true) {
      const remove = await BlogService.remove(blog.id, token);
    } else {
      return false;
    }
  }

  showWhenUserOwn = (blog) => {
    if (blog.user === this.props.user.userId) {
      return { display: '' }
    }
    return {display: 'none'}
  }

  render() {
    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    return (
      <div style={blogStyle}>
        <h3 onClick={this.toggleVisibility}>{this.props.blog.title} {this.props.blog.author}</h3>
        <div style={showWhenVisible}>
          {this.props.blog.id}
          <br />
          {this.props.blog.author}
          <br />
          {this.props.blog.likes}
          <br />
          {this.props.blog.title}
          <br />
          {this.props.blog.url}
          <br />
          <button onClick={() => this.like(this.props.blog)}>LIKE</button>
          <button style={this.showWhenUserOwn(this.props.blog)} onClick={() => this.remove(this.props.blog)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Blog

// import React from 'react'
// const Blog = ({blog}) => {
//   console.log('blog', blog);
//
//   const ShowInfo = (blog) => {
//     console.log('hello', blog);
//     return (
//       <div>
//       {blog.id}
//       {blog.author}
//       {blog.likes}
//       {blog.title}
//       {blog.url}
//       </div>
//     )
//   }
//
//   return (
//   <div onClick={() => ShowInfo(blog)}>
//     {blog.title} {blog.author}
//     <ShowInfo/>
//   </div>
// )}
//
// export default Blog
