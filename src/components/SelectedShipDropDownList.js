import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { changeSelectedShip } from "../features/shiplist/shiplistSlice";

function SelectedShipDropDownList(props) {
  const ships = useSelector((state) => state.ship.ships)
  const selectedShipId = useSelector((state) => state.ship.selectedShipId)
  
  const dispatch=useDispatch()  
  
  const handleChange = e => {   
    e.preventDefault();
    dispatch(changeSelectedShip(e.target.value)) 
  };
  const list_enabled=()=>{
    return(
    <select  value={selectedShipId} onChange={handleChange}>
      {ships.map(option => (                              
        <option key={option.id} value={option.id} >
          {option.name}
        </option>
      ))}
    </select>)
  }
  const list_disabled=()=>{
    return(
    <select disabled value={selectedShipId} onChange={handleChange}>
      {ships.map(option => (                              
        <option key={option.id} value={option.id} >
          {option.name}
        </option>
      ))}
    </select>)
  }
  return (
    <div className='drop-list'>
      {  (props.activeMenu===0)? list_enabled() : list_disabled() } 
    </div>
  );
}

export default SelectedShipDropDownList
