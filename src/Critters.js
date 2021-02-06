import React from 'react';
import critters from './data.js'

const getCritters = (type, month, hemisphere) => {
  return critters.filter(critter => {return (
    type != null &&
    (critter.type === type || type === -1) && 
    critter["active_months"][0][hemisphere].includes(month)
    )}).map(critter => {return {key: critter.id, data: critter}})
}

const Critters = (props) => {  
  const { type, month, hemisphere } = props
  const crittersList = getCritters(type, month, hemisphere)

  return (
    <div>
      {
        crittersList.map(critter => {
          let data = critter.data
          return <p>{data.name}</p>
        })
      }
    </div>
  );
}

export default Critters;
