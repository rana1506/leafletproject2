import React,{ useState } from 'react'
import NewShipComponent from './NewShipComponent';
function NewShipPopup(props) {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
        !seen? props.updateActivrMenu(1):props.updateActivrMenu(0)
    };

    return (
        <div>
            { (props.activeMenu===1 || props.activeMenu===0)?
                <button onClick={togglePop}>Add New Ship</button>
                :
                <button disabled onClick={togglePop}>Add New Ship</button>
            }
            {seen ? <NewShipComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default NewShipPopup
