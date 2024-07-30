import React,{ useState } from 'react'
import EditShipComponent from './EditShipComponent';
function EditShipPopup(props) {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
        !seen? props.updateActivrMenu(3):props.updateActivrMenu(0)
    };

    return (
        <div>
            { (props.activeMenu===3 || props.activeMenu===0)?
                <button onClick={togglePop}>Edit Ship</button>
                :
                <button disabled onClick={togglePop}>Edit Ship</button>
            }
            {seen ? <EditShipComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default EditShipPopup
