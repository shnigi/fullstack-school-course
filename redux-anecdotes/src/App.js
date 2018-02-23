import React from 'react';


class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    anecdote: ''
  }
}

anecDoteVote = (anecdote) => {
  const anecdoteId = anecdote.id
  this.props.store.dispatch({type: 'VOTE', anecdoteId});
}

handleAnecdoteText = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

createAnecdote = (e) => {
  e.preventDefault();
  const anecdote = this.state.anecdote;
  this.props.store.dispatch({type: 'ADD', anecdote});
  this.setState({ anecdote: '' })
}

  render() {
    const anecdotes = this.props.store.getState()
    const anecdotesSorted = anecdotes.sort((a, b) => a.votes < b.votes);
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesSorted.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.anecDoteVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input type="text"
              name="anecdote"
              value={this.state.anecdote}
              onChange={this.handleAnecdoteText}/></div>
          <button onClick={this.createAnecdote}>create</button>
        </form>
      </div>
    )
  }
}

export default App
