import React from 'react'
import { useSelector} from "react-redux";
import { readableLocation } from '../../NavFormula';

function DisplayShip() {
  //const ships = useSelector((state) => state.ship.ships)
  const selectedShipId = useSelector((state) => state.ship.selectedShipId)
  const item = useSelector((state) => state.ship.ships).find(ship=>{return(ship.id===selectedShipId)})
 
  return (
    <div className='shipsdata'>
        <p>Name:{item.name}</p>
        <p>Type:{item.type}</p>
        <p>Location:{readableLocation(item.estimated_position)}</p>
        <p>Course:{item.pcs[item.pcs.length-1].course}</p>
        <p>Speed:{item.pcs[item.pcs.length-1].speed}</p>
        <p>Status:{item.pcs[item.pcs.length-1].status}</p>
        <p>Time:{item.pcs[item.pcs.length-1].time}</p>
    </div>
  )
}

export default DisplayShip
