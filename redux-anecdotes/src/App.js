import React from 'react';


class App extends React.Component {

anecDoteVote = (anecdote) => {
  const anecdoteId = anecdote.id
  this.props.store.dispatch({type: 'VOTE', anecdoteId});
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
          <div><input /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App
