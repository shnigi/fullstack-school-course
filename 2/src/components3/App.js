import React from 'react'
import axios from 'axios'
import Search from './Search.js'
import '../index.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filteredItems: [],
      initialCountries: []
    }
  }

  componentWillMount = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const countries = response.data
        this.setState({initialCountries: countries});
        console.log(countries)
    })
  }

  filterList = (event) => {
     let updatedList = this.state.initialCountries;
     updatedList = updatedList.filter((country) => {
       return country.name.toLowerCase().search(
         event.target.value.toLowerCase()) !== -1;
     });
     this.setState({filteredItems: updatedList});
     this.setState({search: event.target.value});
   }

  render() {
    if (this.state.filteredItems.length > 10) {
      return (
        <div>
          <Search country={this.state.country} filterList={this.filterList}/>
          <p>Too many matches, specify another filter</p>
        </div>
      )
    } else if (this.state.filteredItems.length < 10 && this.state.filteredItems.length > 1) {
      return (
        <div>
          <Search country={this.state.country} filterList={this.filterList}/>
          {this.state.filteredItems.map((country, i) => <p key={i}>{country.name}</p>)}
        </div>
      )
    } else if (this.state.filteredItems.length === 1) {
      return (
        <div>
          <Search country={this.state.country} filterList={this.filterList}/>
          {this.state.filteredItems.map((country, i) => <div key={i}>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <img src={country.flag} alt="flag" className="flag"/>
          </div>)}
        </div>
      )
    } else {
      return (
        <div>
          <Search country={this.state.country} filterList={this.filterList}/>
        </div>
      )
    }
  }
}

export default App
