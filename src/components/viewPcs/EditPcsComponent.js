import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { editPcs } from "../../features/shiplist/shiplistSlice";

function EditPcsComponent(props) {
    const selectedShipId = useSelector((state) => state.ship.selectedShipId)
    const selectedShipName = useSelector((state) => state.ship.selectedShipName)
    const selectedPcs=useSelector((state) => state.ship.ships).find(ship=>{return(ship.id===selectedShipId)}).pcs.find(p=>{return(p.id.toString()===props.selectedPcs.toString())})
    const initialValues = {
        shipid: selectedShipId,
        pcsid: selectedPcs.id,
        lat: selectedPcs.geocode[0],
        lon: selectedPcs.geocode[1],
        course: selectedPcs.course,
        speed: selectedPcs.speed,
        status: selectedPcs.status,
        time: selectedPcs.time,
      }
    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch();

    const handleEditPcs = (e) => {
        e.preventDefault();        
        if(values.status==="Anchored")
            values.speed=0
        dispatch(editPcs(values));
        props.toggle();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values,[name]: value,});
    };
    
    return (
        <div className="popup">
            <h3>Edit PCS:{selectedShipName}</h3>
            <form className="inputform" onSubmit={handleEditPcs} >  
                <div className='inputfield'>
                    <p>Latitude:</p> 
                    <input  type="number"   name="lat"  value={values.lat}  onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Longitude:</p> 
                    <input  type="number"   name="lon"  value={values.lon}  onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Course:</p> 
                    <input  type="number"   name="course"  value={values.course}  onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Speed:</p> 
                    <input  type="number"   name="speed"  value={values.speed}  onChange={handleInputChange} />
                </div>
                <div className='inputfield'>
                    <p>Status:</p> 
                    <select name="status" value={values.status} onChange={handleInputChange}>                                
                            <option value="Anchored" >Anchored</option>
                            <option value="Underway"> Underway</option>
                        </select>
                </div>
                <div className='inputfield'>
                    <p>Time:</p> 
                    <input  type="text"   name="time"  value={values.time}  onChange={handleInputChange} />
                </div>            
                <div className='inputfield'>
                    <button type="submit">OK</button>
                    <button onClick={props.toggle}>Close</button>
                </div>            
            </form>
        </div>
    );
}

export default EditPcsComponent
