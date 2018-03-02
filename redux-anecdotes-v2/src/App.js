import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification store={store}/>
        <Filter store={store}/>
        <AnecdoteList store={store}/>
        <AnecdoteForm store={store}/>
      </div>
    )
  }
}

export default App
