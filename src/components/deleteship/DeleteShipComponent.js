import { useSelector, useDispatch } from "react-redux";
import { removeShip } from "../../features/shiplist/shiplistSlice";

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
                <div className="popup">
                    <h3>Delete Ship:{selectedShipName}</h3>            
                    <br/>
                    Are you sure to delete?
                    <br/><br/>                    
                    <div className='inputfield'>
                    <button onClick={handleDeleteShipDone}>Sure Delete</button>
                    <button onClick={props.toggle}>Close</button>
                    </div>

                    
                </div>
            );
}

export default DeleteShipComponent
