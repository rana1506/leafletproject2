import React,{ useState } from 'react'
import DeleteShipComponent from './DeleteShipComponent';
function DeleteShipPopup(props) {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
        !seen? props.updateActivrMenu(6):props.updateActivrMenu(0)
    };

    return (
        <div>
            { (props.activeMenu===6 || props.activeMenu===0)?
                <button className='button-64' onClick={togglePop}>Delete Ship</button>
                :
                <button className='button-64' disabled onClick={togglePop}>Delete Ship</button>
            }
            {seen ? <DeleteShipComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default DeleteShipPopup
