import React from 'react';
import critters from './data.js'

const getCritters = (type) => {
  return critters.filter(critter => {return (type != null && (critter.type === type || type === -1))}).map(critter => {return {key: critter.id, data: critter}})
}

const Critters = (props) => {  
  const { type } = props
  const crittersList = getCritters(type)
  console.log(props)
  console.log(crittersList)
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
