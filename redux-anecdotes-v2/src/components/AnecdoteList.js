import React from 'react'

class AnecdoteList extends React.Component {
  render() {
    const notesToShow = () => {
       const { filter, anecDotes } = this.props.store.getState();
       if (filter === '') {
         return anecDotes
       }
       return anecDotes
// TÄÄLLÄ KESKEN ASDASDSAD
       // return filter === 'IMPORTANT'
       //   ? notes.filter(note => note.important)
       //   : notes.filter(note => !note.important)
    }
    // const { filter, anecDotes } = this.props.store.getState();
    // console.log('WAT', filter);

    return (
      <div>
        <h2>Anecdotes</h2>
        {notesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          (<div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
               this.props.store.dispatch({ type: 'VOTE', id: anecdote.id })
               }
              >
                vote
              </button>
            </div>
          </div>))}
      </div>
    )
  }
}

export default AnecdoteList
