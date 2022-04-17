import { MapContainer, TileLayer, Marker } from "react-leaflet";
export default function Map({ data }) {
  const lat = data.latitude;
  const lng = data.longitude;
  return (
    <>
      {lat && (
        <MapContainer className="map-container" center={[lat, lng]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}></Marker>
        </MapContainer>
      )}
    </>
  );
}
