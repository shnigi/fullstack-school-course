import React from 'react'
import blogService from '../services/blogs'
import '../style.css'
import Notification from './Notification'

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      url: '',
      likes: '',
      user: this.props.user,
      notification: null,
      createBlogVisible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    const newBlog = {
      "title": this.state.title,
      "author": this.state.author,
      "url": this.state.url,
      "likes": this.state.likes,
  		"userId": this.props.user.userId
    }
    const response = blogService.create(newBlog)
    if (response) {
      this.setState({
        notification: `Uusi blogi "${newBlog.title}" lisätty onnistuneesti`,
      })
      setTimeout(() => {
        this.setState({notification: null})
      }, 5000)
    }
    event.preventDefault();
  }

  render() {
    const hideWhenVisible = { display: this.state.createBlogVisible ? 'none' : '' }
    const showWhenVisible = { display: this.state.createBlogVisible ? '' : 'none' }

    return (
      <div>
        <br />
        <button onClick={e => this.setState({ createBlogVisible: true })}>Näytä</button>
        <button onClick={e => this.setState({ createBlogVisible: false })}>Piilota</button>
        <br />
      <form onSubmit={this.handleSubmit}>
      <Notification message={this.state.notification} color="success"/>
        <div>
          <h2>Lisää uusi blogi</h2>
          <div style={showWhenVisible}>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
           />
           <br />
           Author: <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
           />
           <br />
           Url: <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
           />
           <br />
           Likes: <input
           type="text"
           name="likes"
           value={this.state.likes}
           onChange={this.handleChange}
           />
          <br />
           <input type="submit" value="Submit" />
           </div>
        </div>
      </form>
      </div>
    );
  }
}

export default CreateBlog
