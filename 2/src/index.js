import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [{
        name: 'Niki Ahlskog',
        id: 1
      },
      {
        name: 'Seppo Rajamäki',
        id: 2,
        phone: '345343452'
      },
      {
        name: 'Hannu Karpo',
        id: 3,
        phone: '2352523523'
      }],
      newName: '',
      phoneNumber: '',
      filter: '',
      filteredItems: []
    }
  }

  componentWillMount = () => {
    this.setState({filteredItems: this.state.persons})
  }

  handleNewName = (event) => {
   this.setState({ newName: event.target.value })
 }

 handleNewNumber = (event) => {
   this.setState({ phoneNumber: event.target.value })
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
        id: this.state.persons.length + 1,
        phone: this.state.phoneNumber
      }

      const persons = this.state.persons.concat(nameObject)

      this.setState({
        persons,
        newName: '',
        phoneNumber: '',
        filteredItems: persons
      })
    } else {
      alert('Nimi on jo listalla!')
    }
  }

  filterList = (event) => {
     let updatedList = this.state.persons;
     updatedList = updatedList.filter((person) => {
       return person.name.toLowerCase().search(
         event.target.value.toLowerCase()) !== -1;
     });
     this.setState({filteredItems: updatedList});
     this.setState({filter: event.target.value});
   }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <div>
         Rajaa näytettäviä:
         <input
            value={this.state.filter}
            onChange={this.filterList}
           />
        </div>
        <br />

        <form onSubmit={this.addPerson}>
          <div>
            nimi:
            <input
             value={this.state.newName}
             onChange={this.handleNewName}
            />
          </div>
          <div>
           numero:
           <input
             value={this.state.phoneNumber}
             onChange={this.handleNewNumber}
           />
         </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.filteredItems.map(person => <p key={person.id}>{person.name} {person.phone}</p>)}
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
