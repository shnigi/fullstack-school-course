import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import CreateBlog from './components/CreateBlog'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      notification: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      blogService.setToken(user.token)
    }
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      if (!user) {
        this.setState({
          notification: 'käyttäjätunnus tai salasana virheellinen',
        })
        setTimeout(() => {
          this.setState({ notification: null })
        }, 5000)
      }

      window.localStorage.setItem('loggedInUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user})
    } catch(exception) {
      this.setState({
        notification: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ notification: null })
      }, 5000)
    }
  }

  logout = () => {
    window.localStorage.removeItem('loggedInUser')
    this.setState({ user: null })
  }

  render() {
    const blogsInLikeOrder = this.state.blogs.sort((a, b) => a.likes < b.likes)

    const loginForm = () => (
      <div>
        <h2>Kirjaudu</h2>
        <Notification message={this.state.notification} color="error"/>

        <form onSubmit={this.login}>
          <div>
            käyttäjätunnus
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <div>
            salasana
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginFieldChange}
            />
          </div>
          <button type="submit">kirjaudu</button>
        </form>
      </div>
    )

  const  blogs = () => (
      <div className="blogList">
        <h2>blogs</h2>
        <h3>Teretulemast blogisivul {this.state.user.username}</h3>
        <button onClick={this.logout}>Kirjaudu ulos</button>
        {blogsInLikeOrder.map(blog =>
          <Blog key={blog.id} blog={blog} user={this.state.user}/>
        )}
        <CreateBlog user={this.state.user}/>
      </div>
    )

    return (
      <div>
        {this.state.user === null ?
         loginForm() :
         blogs()
         }
       </div>
    );
  }
}

export default App;
