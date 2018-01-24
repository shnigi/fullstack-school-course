import React from 'react'
import Osa from './Osa.js'

const Sisalto = ({kurssit}) => (
  <div>
    <Osa osa={kurssit.osat[0].nimi} tehtavia={kurssit.osat[0].tehtavia}/>
    <Osa osa={kurssit.osat[1].nimi} tehtavia={kurssit.osat[1].tehtavia}/>
    <Osa osa={kurssit.osat[2].nimi} tehtavia={kurssit.osat[2].tehtavia}/>
  </div>
)

export default Sisalto
