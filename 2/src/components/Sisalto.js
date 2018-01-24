import React from 'react'
import Osa from './Osa.js'

const Sisalto = ({kurssi}) => (
  <div>
    <Osa osa={kurssi.osat[0].nimi} tehtavia={kurssi.osat[0].tehtavia}/>
    <Osa osa={kurssi.osat[1].nimi} tehtavia={kurssi.osat[1].tehtavia}/>
    <Osa osa={kurssi.osat[2].nimi} tehtavia={kurssi.osat[2].tehtavia}/>
  </div>
)

export default Sisalto
