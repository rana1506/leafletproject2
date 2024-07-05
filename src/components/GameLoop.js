import React, {useEffect} from 'react'
import { useSelector, useDispatch} from "react-redux";
import { editShipPosition } from "../features/shiplist/shiplistSlice";
import {calculateDestinationPoint} from "../NavFormula"

const duration=10000 //in miliseconds
function getNextPosition(ship){
  const lastIndex= ship.pcs.length-1
  var startPoint = { lat: ship.estimated_position[0], lng: ship.estimated_position[1] };
  var distance= ship.pcs[lastIndex].speed*duration/1000/3600
  var nextPosition = calculateDestinationPoint(startPoint, ship.pcs[lastIndex].course, distance);
  return [ nextPosition.lat, nextPosition.lng]
}
function GameLoop() {
  const ships = useSelector((state) => state.ship.ships)
  const dispatch=useDispatch()
  
  useEffect(() => {    
      const interval = setInterval(() => {
      ships.forEach(ship=>{
        const geocode=getNextPosition(ship)
        const value={id:ship.id, geocode:geocode}
        dispatch(editShipPosition(value))
      })
      //console.log("GameLoop:"+ships[2].name)
    }, duration);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [ships]);
 
  return (
    <div>
    </div>
  )
}

export default GameLoop
