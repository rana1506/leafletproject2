import React,{ useState } from 'react'
import EditShipComponent from './EditShipComponent';
function EditShipPopup() {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    return (
        <div>
            <button onClick={togglePop}>Edit Ship</button>
            {seen ? <EditShipComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default EditShipPopup
