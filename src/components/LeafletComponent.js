import "../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon, Popup } from "leaflet";
import { useSelector } from "react-redux";
const LeafletComponent = () => {
  /*const [lat, setLat] = useState();
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      const 
      setLat(lat + 0.1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [lat]);
  const markers = [
    {
      geocode: [21, 91.0],
      popUp: "I am here!",
    },
  ];*/
  const ships = useSelector((state) => state.ship.ships);

  const customIcon = new Icon({
    iconUrl: require("../img/pin.png"),
    iconSize: [50, 50],
  });
  return (
    <MapContainer center={[21.0, 91.0]} zoom={8}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {ships.map((ship) => (
        <Marker position={ship.pcs[ship.pcs.length-1].geocode} icon={customIcon} opacity={0.7} title={ship.name} alt="TTT">
        </Marker>
        
      ))}
    </MapContainer>
  );
};
export default LeafletComponent;
