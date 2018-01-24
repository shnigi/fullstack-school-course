import React from 'react'
import ReactDOM from 'react-dom'
import Otsikko from './components/Otsikko.js'
import Sisalto from './components/Sisalto.js'
import Yhteensa from './components/Yhteensa.js'

const App = () => {
  const kurssit = [
      {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
          }
        ]
      },
      {
        nimi: 'Node.js',
        id: 2,
        osat: [
          {
            nimi: 'Routing',
            tehtavia: 3,
            id: 1
          },
          {
            nimi: 'Middlewaret',
            tehtavia: 7,
            id: 2
          }
        ]
      }
    ]

  const Kurssi = ({ kurssit }) => {
    return (
      <div>
        <h1>Opetusohjelma</h1>
        <Otsikko kurssit={kurssit} />
        <Sisalto kurssit={kurssit} />
        <Yhteensa kurssit={kurssit} />
      </div>
    )
  }


  return (
    <div>
      {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssit={kurssi} />)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
