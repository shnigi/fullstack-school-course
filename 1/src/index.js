import React from 'react'
import ReactDOM from 'react-dom'

const Statistiikka = ({statistiikka}) => (
  <div>
    <h2>Statistiikka</h2>
    <p>Hyvä: {statistiikka.hyva}</p>
    <p>Neutraali: {statistiikka.neutraali}</p>
    <p>Huono: {statistiikka.huono}</p>
  </div>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

render() {
  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>Hyvä</button>
      <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>Neutraali</button>
      <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>Huono</button>
      <Statistiikka statistiikka={this.state}/>
    </div>
  )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
