import SelectedShipDropDownList from './SelectedShipDropDownList'
import NewShipPopup from './addship/NewShipPopup';
import DeleteShipPopup from './deleteship/DeleteShipPopup';
import EditShipPopup from './editship/EditShipPopup';
import AddPcsPopup from './addpcs/AddPcsPopup'
import ViewPcsPopup from './viewPcs/ViewPcsPopup';

function Header() { 

  return (
    <div className="header">
      <div>
        LOGO
      </div>      
      <NewShipPopup/>   
      <SelectedShipDropDownList/>      
      <EditShipPopup/>
      <ViewPcsPopup/>
      <AddPcsPopup/>
      <DeleteShipPopup/>
  
    </div> 
  )
}

export default Header
