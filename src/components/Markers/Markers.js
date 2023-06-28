import React from "react";

import {Marker} from 'react-leaflet';
import { Iconlocation } from "../Iconlocation/Iconlocation";


function Markers(){
    return(
        <div>
            <Marker position={[-33.409, -70.594]} icon={Iconlocation} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[-32.409, -68.594]} icon={Iconlocation} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
        </div>
    )
}

export default Markers