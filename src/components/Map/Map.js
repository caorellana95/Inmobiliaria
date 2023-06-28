import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'

import Markers from '../Markers/Markers';
// import { proyectos } from 'assets/data.json'


function Map() {
    return (
        <div>
            <MapContainer center={[-33.409, -70.594]} zoom={13} scrollWheelZoom={false} className="mapa" >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Markers proyectos = {proyectos}/> */}
            </MapContainer>
        </div>
    )

}

export default Map