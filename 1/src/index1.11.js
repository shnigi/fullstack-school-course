import React from 'react'
import ReactDOM from 'react-dom'

const Statistic =  ({text, value}) => (
  <tr>
    <td>
      <p>{text}:</p>
    </td>
    <td>
      <p>{value}</p>
    </td>
  </tr>
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
        <table>
        <tbody>
          <Statistic text="Hyvä" value={statistiikka.hyva}/>
          <Statistic text="Neutraali" value={statistiikka.neutraali}/>
          <Statistic text="Huono" value={statistiikka.huono}/>
          <Statistic text="Keskiarvo" value={average.toFixed(2)}/>
          <Statistic text="Positiivisia" value={(positiivisia*100).toFixed(2)}/>
        </tbody>
        </table>
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

  setValue = (type) => {
    return () => {
      if (type === 'hyva') {
        this.setState({ hyva: this.state.hyva + 1 })
      } else if (type === 'neutraali') {
        this.setState({ neutraali: this.state.neutraali + 1 })
      } else if (type === 'huono') {
        this.setState({ huono: this.state.huono + 1 })
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Nappula handleClick={this.setValue('hyva')} text="Hyvä"/>
        <Nappula handleClick={this.setValue('neutraali')} text="Neutraali"/>
        <Nappula handleClick={this.setValue('huono')} text="Huono"/>
        <Statistiikka statistiikka={this.state}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
