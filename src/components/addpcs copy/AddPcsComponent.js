import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addPCS } from "../../features/shiplist/shiplistSlice";



function AddPcsComponent(props) {
    const selectedShipId = useSelector((state) => state.ship.selectedShipId)
    const item = useSelector((state) => state.ship.ships).find(ship=>{return(ship.id===selectedShipId)})

    const initialValues = {
        id: item.id,
        name: item.name,
        lat: item.estimated_position[0],
        lon: item.estimated_position[1],
        course: item.pcs[item.pcs.length-1].course,
        speed: item.pcs[item.pcs.length-1].speed,
        status: item.pcs[item.pcs.length-1].status,
        time: 1100,
      };

    const [values, setValues] = useState(initialValues);
    const dispatch = useDispatch();

    const handleAddPcs = (e) => {
        e.preventDefault();
        if(values.status==="Anchored")
            values.speed=0
        dispatch(addPCS(values));
        props.toggle();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    };
    return (
        <div className="addnewship">
            <h1>Add PCS:{values.name}</h1>
            <form className="App-form" onSubmit={handleAddPcs}>                 
                Latitude:   <input  type="number"   name="lat"  value={values.lat}  onChange={handleInputChange} />
                <br />
                Longitude:  <input  type="number"   name="lon"  value={values.lon}  onChange={handleInputChange} />
                <br />
                Course:     <input  type="number"   name="course"  value={values.course}  onChange={handleInputChange} />
                <br />
                Speed:      <input  type="number"   name="speed"  value={values.speed}  onChange={handleInputChange} />
                <br/>
                {/* Status:     <input  type="text"     name="status" value={values.status} onChange={handleInputChange} /> */}
                <br />
                Status:     <select name="status" value={values.status} onChange={handleInputChange}>                                
                                <option value="Anchored" >Anchored</option>
                                <option value="Underway"> Underway</option>
                            </select>
                <br />
                Time:       <input  type="text"   name="time"  value={values.time}  onChange={handleInputChange} />
                <br />
                <br />
                <button type="submit">ADD</button>
                <button onClick={props.toggle}>Close</button>
            </form>
        </div>
    );
}

export default AddPcsComponent
