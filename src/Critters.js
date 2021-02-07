import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core'
import critters from './data.js'

const isActiveHour = (start, end, hour) => {
  if (start.length && end.length && start.length === end.length) {
    for (var i = 0; i < start.length; i++) {
      let s = end[i]
      let e = end[i]
      if (e === -1 && s === -1) {
        return true
      }
      else if (e - s < 0) {
        return ((s <= hour && 23 >= hour) || (0 <= hour && e>=hour))
      }
      else if (e - s > 0) {
        return (s <= hour && e >= hour)
      }
      else if (e - s === 0) {
        return e === s === hour
      }
    }
    return false
  }
  else {
    console.error("Mismatched end/start lengths")
  }
}

const getCritters = (type, month, hemisphere, hour, timeFilter, isRaining) => {
  return critters.filter(critter => {return (
    type != null &&
    hemisphere != null &&
    (critter.type === type || type === -1) && 
    (month == null || critter["active_months"][0][hemisphere].includes(month)) &&
    (!timeFilter || isActiveHour(critter["start_time"], critter["end_time"], hour)) //&& 
    //(isRaining || critter["location"].indexOf("(raining)") < 0)
    )}).map(critter => {return {key: critter.id, data: critter}})
}

const Critters = (props) => {  
  const { type, month, hemisphere, hour, timeFilter, isRaining } = props
  const crittersList = getCritters(type, month, hemisphere, hour, timeFilter, isRaining)

  return (
    <div>
      <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Sell Price</TableCell>
            <TableCell align="left">Where to Find</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crittersList.map((critter) => (
            <TableRow key={critter.key}>
              <TableCell component="th" scope="row">
                {critter.data.name}
              </TableCell>
              <TableCell align="left">{critter.data.price}</TableCell>
              <TableCell align="left">{critter.data.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Critters;
