import SelectedShipDropDownList from './SelectedShipDropDownList'
import NewShipPopup from './NewShipPopup';
import DeleteShipPopup from './DeleteShipPopup';
function Header() { 

  return (
    <div className="header">
      <div>
        LOGO
      </div>      
      <NewShipPopup/>      
      <div>
        Selected Ship:
        <SelectedShipDropDownList/>
      </div>
      <DeleteShipPopup/>
  
    </div> 
  )
}

export default Header
