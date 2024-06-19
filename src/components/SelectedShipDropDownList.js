import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { changeSelectedShip } from "../features/shiplist/shiplistSlice";

function SelectedShipDropDownList() {
  const ships = useSelector((state) => state.ship.ships)
  const selectedShipId = useSelector((state) => state.ship.selectedShipId)
  
  const dispatch=useDispatch()  
  
  const handleChange = e => {   
    e.preventDefault();
    dispatch(changeSelectedShip(e.target.value)) 
  };
  
  return (
    <div>
      <select  value={selectedShipId} onChange={handleChange}>
        {ships.map(option => (                              
          <option key={option.id} value={option.id} >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectedShipDropDownList
