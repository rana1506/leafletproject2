import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import EditPcsComponent from "./EditPcsComponent";

function ViewPcsComponent(props) {   
    const selectedShipId = useSelector((state) => state.ship.selectedShipId)
    const item = useSelector((state) => state.ship.ships).find(ship=>{return(ship.id===selectedShipId)}) 
    const data=item.pcs

    const [seen, setSeen] = useState(false)
    const [selectedPcs, setSelectedPcs] = useState(0)

    function rowClicked (e) {
        //const { name, value } = e.target;
        setSelectedPcs(e.target.parentNode.childNodes[0].innerHTML)
        //console.log(e.target.parentNode.childNodes[0])
        togglePop ()
    }; 
    function togglePop () {        
        setSeen(!seen);
        //props.toggle()
    };   

    return (
        <div className="addnewship"> 
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Time</th>
                        <th>Position</th>
                        <th>Course</th>                    
                        <th>Speed</th>                   
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody> 
                    {data.map((val, key) => {
                        return (
                            <tr key={key} onClick={e=>rowClicked(e)} >
                                <td >{val.id}</td>
                                <td>{val.time}</td>
                                <td>{val.geocode}</td>
                                <td>{val.course}</td>
                                <td>{val.speed}</td>
                                <td>{val.status}</td>
                            </tr>                            
                        )
                    })}
                    <tr><button onClick={props.toggle}>Close Table</button></tr>
                </tbody>
            </table>
            
            {seen ? <EditPcsComponent selectedPcs={selectedPcs} toggle={togglePop} /> : null}
        </div>
    );
}

export default ViewPcsComponent
