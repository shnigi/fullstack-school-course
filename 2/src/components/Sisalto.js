import React from 'react'
import Osa from './Osa.js'

const Sisalto = ({kurssit}) => {
  return (
  <div>
    {kurssit.osat.map(kurssi => <Osa key={kurssi.nimi} osa={kurssi.nimi} tehtavia={kurssi.tehtavia}/>)}
  </div>)
}

export default Sisalto
