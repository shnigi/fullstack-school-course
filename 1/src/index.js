import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0],
      mostVotes: undefined
    }
  }

  random = () => {
    const random = Math.floor(Math.random() * 5) + 1;
    this.setState({ selected: random })
  }

  checkMostVoted = () => {
    const anecdotes = this.state.votes;
    const indexOfMostVoted = anecdotes.indexOf(Math.max(...anecdotes));
    this.setState({ mostVotes: indexOfMostVoted })
  }

  vote = () => {
    const index = this.state.selected;
    const votes = this.state.votes;
    votes[index]++;
    this.setState({votes});
    this.checkMostVoted();
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br/>
        <button onClick={this.random}>Random</button>
        <button onClick={this.vote}>Vote</button>
        <p>Has {this.state.votes[this.state.selected]} votes</p>
        <br/>
        <h2>Anecdote with most votes:</h2>
        <p>{this.props.anecdotes[this.state.mostVotes]}</p>
        <p>has {this.state.votes[this.state.mostVotes]} votes</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
