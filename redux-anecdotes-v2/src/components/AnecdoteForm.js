import React from 'react'
import { anecDoteCreation } from '../reducers/anecdoteReducer'
import { notificationChange, clearNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(
      anecDoteCreation(content)
    )
    this.props.store.dispatch(
      notificationChange('Anekdootti lisätty jeejee')
    )

    setTimeout(() => {
     this.props.store.dispatch(clearNotification())
   }, 5000)

    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
     )
   }
}

export default AnecdoteForm
