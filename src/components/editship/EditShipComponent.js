import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { editShip } from "../../features/shiplist/shiplistSlice";

function EditShipComponent(props) {
    const selectedShipId = useSelector((state) => state.ship.selectedShipId)
    const item = useSelector((state) => state.ship.ships).find(ship=>{return(ship.id===selectedShipId)})

    const initialValues = {
        id: item.id,
        name: item.name,
        type: item.type,
      };

    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch();

    const handleAddPcs = (e) => {
        e.preventDefault();
        dispatch(editShip(values));
        props.toggle();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    };
    return (
        <div className="popup">
            <h3>Edit Ship:{item.name}</h3>
            <form className="inputform" onSubmit={handleAddPcs}>  
                <div className='inputfield'>
                        <p>Name:</p> 
                        <input  type="text"   name="name"  value={values.name}  onChange={handleInputChange} />
                </div>              
                <div className='inputfield'>
                    <p>Type:</p> 
                    <input  type="text"   name="type"  value={values.type}  onChange={handleInputChange} /> 
                </div>
                <div className='inputfield'>
                    <button type="submit">OK</button>
                    <button onClick={props.toggle}>Close</button>
                </div>
            </form>
        
        </div>
    );
}

export default EditShipComponent
