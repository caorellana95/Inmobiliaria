import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-icon.png';

let iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [20, 35],
    iconAnchor: [22, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

let iconUbicacion2 = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [30, 35],
    iconAnchor: [22, 94],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

function Map() {
    return (
        <div>
            <MapContainer center={[-33.409, -70.594]} zoom={13} scrollWheelZoom={false} className="mapa" >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )

}

export default Map