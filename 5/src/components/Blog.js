import React from 'react'
class Blog extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', props);
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
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
