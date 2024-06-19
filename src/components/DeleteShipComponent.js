import { useSelector, useDispatch } from "react-redux";
import { removeShip } from "../features/shiplist/shiplistSlice";

function DeleteShipComponent(props) {   
    const count = useSelector((state) => state.ship.count);
    const selectedShipId = useSelector((state) => state.ship.selectedShipId);
    const selectedShipName = useSelector((state) => state.ship.selectedShipName);
    const dispatch = useDispatch();
   
    const handleDeleteShipDone = (e) => {
        e.preventDefault();
        dispatch(removeShip(selectedShipId));
        props.toggle();
      };
      if(count>1)
            return (        
                <div className="addnewship">
                    <h1>Delete Ship:{selectedShipName}</h1>            
                    Are you sure to delete?
                    <button onClick={handleDeleteShipDone}>Sure Delete</button>
                    <button onClick={props.toggle}>Close</button>
                </div>
            );
}

export default DeleteShipComponent
