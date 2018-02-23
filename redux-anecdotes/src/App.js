import React from 'react';


class App extends React.Component {

anecDoteVote = (anecdote) => {
  console.log('hello', anecdote.id);
  const anecdoteId = anecdote.id
  this.props.store.dispatch({type: 'VOTE', anecdoteId});
  console.log('STORE NYT', this.props.store.getState());
}

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
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
