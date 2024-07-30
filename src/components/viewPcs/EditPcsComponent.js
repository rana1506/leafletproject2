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
        <div className="addnewship1">
            <h1>Edit PCS:{selectedShipName}</h1>
            <form className="App-form" onSubmit={handleEditPcs} >  
            Latitude:   <input  type="number"   name="lat"  value={values.lat}  onChange={handleInputChange} />
            <br />
            Longitude:  <input  type="number"   name="lon"  value={values.lon}  onChange={handleInputChange} />
            <br />
            Course:     <input  type="number"   name="course"  value={values.course}  onChange={handleInputChange} />
            <br />
            Speed:      <input  type="number"   name="speed"  value={values.speed}  onChange={handleInputChange} />
            <br/>
            {/* Status:     <input  type="text"     name="status" value={values.status} onChange={handleInputChange} /> */}
            Status:     <select name="status" value={values.status} onChange={handleInputChange}>                                
                            <option value="Anchored" >Anchored</option>
                            <option value="Underway"> Underway</option>
                        </select>
            <br />
            Time:       <input  type="text"   name="time"  value={values.time}  onChange={handleInputChange} />
            <br />
            <button type="submit">OK</button>
            <button onClick={props.toggle}>Close</button>
            </form>
        </div>
    );
}

export default EditPcsComponent
