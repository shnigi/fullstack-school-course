import React from 'react'
import ReactDOM from 'react-dom'

const Statistic =  ({text, value}) => (
  <p>{text}: {value}</p>
)

const Statistiikka = ({statistiikka}) => {
  const number = statistiikka.hyva - statistiikka.huono;
  const sum = statistiikka.hyva + statistiikka.neutraali + statistiikka.huono;
  const average = number / sum;
  const positiivisia = statistiikka.hyva / sum;
  if (statistiikka.hyva || statistiikka.neutraali || statistiikka.huono) {
    return (
      <div>
        <h2>Statistiikka</h2>
        <Statistic text="Hyvä" value={statistiikka.hyva}/>
        <Statistic text="Neutraali" value={statistiikka.neutraali}/>
        <Statistic text="Huono" value={statistiikka.huono}/>
        <Statistic text="Keskiarvo" value={average.toFixed(2)}/>
        <Statistic text="Positiivisia" value={(positiivisia*100).toFixed(2)}/>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Statistiikka</h2>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  }
}

const Nappula =  ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
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
      <Nappula handleClick={() => this.setState({ hyva: this.state.hyva + 1 })} text="Hyvä"/>
      <Nappula handleClick={() => this.setState({ neutraali: this.state.neutraali + 1 })} text="Neutraali"/>
      <Nappula handleClick={() => this.setState({ huono: this.state.huono + 1 })} text="Huono"/>
      <Statistiikka statistiikka={this.state}/>
    </div>
  )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
