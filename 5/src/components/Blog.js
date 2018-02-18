import React from 'react'
import BlogService from '../services/blogs.js'
import PropTypes from 'prop-types'

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
    await BlogService.update(blog.id, updatedBlog);
  }

  remove = async (blog) => {
    const token = this.props.user.token
    if (window.confirm("Poista?") === true) {
      await BlogService.remove(blog.id, token);
    } else {
      return false;
    }
  }

  showWhenUserOwn = ({user}) => ({
    display: user === this.props.user.userId ? '' : 'none'
  })

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
        <h3 className="heading" onClick={this.toggleVisibility}>{this.props.blog.title} {this.props.blog.author}</h3>
        <div style={showWhenVisible} className="blog-details">
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

Blog.propTypes = {
  user: PropTypes.object,
  blog: PropTypes.object
}
