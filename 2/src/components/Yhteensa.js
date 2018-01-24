import React from 'react'

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const Yhteensa = ({kurssit}) => {
  const tehtavia = kurssit.osat.map(kurssi => kurssi.tehtavia);
  return (<p>Yhteensä {tehtavia.reduce(reducer)} tehtävää</p>)
};

export default Yhteensa
