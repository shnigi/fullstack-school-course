import React from 'react'
import ReactDOM from 'react-dom'
import Otsikko from './components/Otsikko.js'
import Sisalto from './components/Sisalto.js'
import Yhteensa from './components/Yhteensa.js'

const App = () => {
  const kurssit = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssit={kurssit} />
      <Sisalto kurssit={kurssit}/>
      <Yhteensa kurssit={kurssit}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
