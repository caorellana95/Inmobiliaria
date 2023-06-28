import React from "react";

import {Marker} from 'react-leaflet';
import IconLocation from "../IconLocation/IconLocation";


function Markers(props){
    const {proyectos} = props;
    const markers = proyectos.map((proyecto, i) => (
        <Marker key={i} position={proyecto.coordenadas} icon={IconLocation} />
   
    ))
    return markers
    
}

export default Markers