import "../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import * as L from "leaflet";
import { Icon, Popup } from "leaflet";
import { useSelector } from "react-redux";
const LeafletComponent = () => {
  
  const ships = useSelector((state) => state.ship.ships);  

  function getIcon(icontype){    
      const icon= new Icon({
        iconUrl: require("../img/surface_own.png"),
        iconSize: [20, 20],
      }) 
      return icon   
  }
  const customIcon =new Icon({
    iconUrl: require("../img/surface_friendly.png"),
    iconSize: [20, 20],
  });
  
  return (
    <MapContainer center={[21.0, 91.0]} zoom={8}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ships.map((ship) => (
        //{customIcon.style.transform += " rotate(20deg)"}
        <Marker position={ship.estimated_position} icon={getIcon("surface_own")} opacity={0.7} title={ship.name} alt="TTT"/>
        
        
      ))}
      {ships.map((ship) => (
          <Polyline pathOptions={{ color: 'black' }} positions={getPcsTrack(ship)} />
      ))}
      
      
    </MapContainer>
    
  );
};
function getPcsTrack (ship)
{
  const temp=[]
  for (const item of ship.pcs) {
    temp.push(item.geocode)
  }
  temp.push(ship.estimated_position)  
  return temp
}  
export default LeafletComponent;
