import React from 'react';
import critters from './data.js'

function getFish() {
    return critters.filter(function(critter) {
      if (critter.type === 1) {
        return critter
      }
    })
}

function getBugs() {
  return critters.filter(function(critter) {
    if (critter.type === 0) {
      return critter
    }
  })
}


function Critters() {  
  return (
    <div>
      {
        getFish().map(fish => {
          return <p>{fish.name}</p>
        }
        )
      }
    </div>
  );
}

export default Critters;
