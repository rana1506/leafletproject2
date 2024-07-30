import React,{ useState } from 'react'
import AddPcsComponent from './AddPcsComponent';
function AddPcsPopup(props) {
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
        !seen? props.updateActivrMenu(5):props.updateActivrMenu(0)
    };

    return (
        <div>
            { (props.activeMenu===5 || props.activeMenu===0)?
                <button className='button-64' onClick={togglePop}>Add PCS</button>
                :
                <button className='button-64' disabled onClick={togglePop}>Add PCS</button>
            }
            {seen ? <AddPcsComponent toggle={togglePop} /> : null}
        </div>
    )
}

export default AddPcsPopup
