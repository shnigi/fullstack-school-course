import React from 'react'
import Otsikko from './Otsikko.js'
import Sisalto from './Sisalto.js'
import Yhteensa from './Yhteensa.js'

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

export default Kurssi
