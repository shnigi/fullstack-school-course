import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

const counterReducer = (state = 0, action) => {
  console.log('wat', action);
  console.log('state', state);
  switch (action.type) {
    case 'GOOD':
      return state + 1
    case 'OK':
      return state + 1
    case 'BAD':
      return state - 1
    default:
     return state
  }
}

const store = createStore(counterReducer)

const Statistiikka = () => {
  const palautteita = store.getState()

  if (palautteita === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState()}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td></td>
          </tr>
          <tr>
            <td>huono</td>
            <td></td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td></td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button>nollaa tilasto</button>
    </div>
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    console.log('NAPPI', nappi);
    store.dispatch({type: nappi});
    // nappi => store.dispatch({ type: nappi})
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
