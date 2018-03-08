import React from 'react'

class AnecdoteList extends React.Component {
  render() {
    const notesToShow = () => {
       const { filter, anecDotes } = this.props.store.getState();
       if (filter === '') {
         return anecDotes
       }
       if (filter !== '') {
         const regex = new RegExp(filter, 'i');
         return anecDotes.filter(({content}) => content.match(regex));
       }
       return anecDotes
    }

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
