import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle map centering
const CenterMap = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, { animate: true, duration: 1.5 }); // Animate the fly to the new position
  }, [position, map]);

  return null;
};

const MapView = ({ position }) => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '300px', width: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CenterMap position={position} />
      <Marker position={position}>
        <Popup>
          This is {position[0]}, {position[1]}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
