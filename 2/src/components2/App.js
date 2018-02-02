import React from 'react'
import Rajaus from './Rajaus.js'
import Lisaa from './Lisaa.js'
import dbService from '../services/db.js'
import '../index.css'
import SuccessNotification from './Success.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      phoneNumber: '',
      filter: '',
      filteredItems: [],
      successMessage: null
    }
  }

  componentWillMount = () => {
    dbService
    .getAll()
    .then(response => {
      this.setState({filteredItems: response, persons: response})
    })
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
        number: this.state.phoneNumber
      }

      dbService
      .create(nameObject)
      .then(() => {
        dbService
          .getAll()
          .then(response => {
            this.setState({
              filteredItems: response,
              persons: response,
              successMessage: 'Luotu onnistuneesti!',
              newName: '',
              phoneNumber: '',})
          })
        this.hideMessage();
      })

    } else {
      if(window.confirm('Haluatko päivittää numeron?')) {
        const names = this.state.persons.map(person => person.name);
        const personObject = this.state.persons[names.indexOf(this.state.newName)];
        const changedPerson = { ...personObject, number: this.state.phoneNumber }

        dbService
          .update(personObject.id, changedPerson)
          .then(response => {
            dbService
              .getAll()
              .then(response => {
                this.setState({
                  filteredItems: response,
                  persons: response,
                  phoneNumber: '',
                  newName: '',
                  successMessage: 'Päivitetty onnistuneesti!',})
                this.hideMessage();
              })
          })
          .catch(error => {
            console.log('fail')
            this.setState({
              successMessage: 'Varoitus, henkilöä ei löydy kannasta enää!',})
            this.hideMessage();
          })
      }
    }
  }

  hideMessage = () => {
    setTimeout(() => {
       this.setState({successMessage: null})
     }, 5000)
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

   deletePerson = (personId) => {
     dbService
      .remove(personId)
      .then(response => {
        dbService
          .getAll()
          .then(response => {
            this.setState({
              filteredItems: response,
              persons: response,
              successMessage: 'Poistettu onnistuneesti!'
            })
            this.hideMessage();
          })
      })
   }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <SuccessNotification message={this.state.successMessage}/>

        <Rajaus filter={this.state.filter} filterList={this.filterList} />

        <br />

        <Lisaa submit={this.addPerson} newName={this.state.newName} handleName={this.handleNewName} phoneNumber={this.state.phoneNumber} handlePhone={this.handleNewNumber}/>
        <h2>Numerot</h2>
        {this.state.filteredItems.map(person =>
          <div key={person.id}>
          {person.name}
          {person.number}
          <button onClick={() => {if(window.confirm('Delete the item?')) {this.deletePerson(person.id)};}}>Delete</button>
          </div>
        )}
      </div>
    )
  }
}

export default App
