import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [{
        name: 'Niki Ahlskog',
        id: 1
      }],
      newName: ''
    }
  }

  handleNewName = (event) => {
   this.setState({ newName: event.target.value })
 }

 checkIfNameExists = () => {
   const names = this.state.persons.map(person => person.name);
   if (names.includes(this.state.newName)) return false;
   return true;
 }

  addPerson = (event) => {
    event.preventDefault()

    if (this.checkIfNameExists()) {
      const nameObject = {
        name: this.state.newName,
        date: new Date().new,
        important: Math.random() > 0.5,
        id: this.state.persons.length + 1
      }

      const persons = this.state.persons.concat(nameObject)

      this.setState({
        persons,
        newName: ''
      })
    } else {
      alert('Nimi on jo listalla!')
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
            <input
             value={this.state.newName}
             onChange={this.handleNewName}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <p key={person.id}>{person.name}</p>)}
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
