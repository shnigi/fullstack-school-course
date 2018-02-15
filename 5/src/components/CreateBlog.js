import React from 'react'
import blogService from '../services/blogs'

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      url: '',
      likes: '',
      user: this.props.user
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    const newBlog = {
      "title": this.state.title,
      "author": this.state.author,
      "url": this.state.url,
      "likes": this.state.likes,
  		"userId": this.props.user.userId
    }
    blogService.create(newBlog)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>Lisää uusi blogi</h2>
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
      </form>
    );
  }
}

export default CreateBlog
