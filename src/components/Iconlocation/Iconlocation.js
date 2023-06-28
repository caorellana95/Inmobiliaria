import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-icon.png';

function IconLocation(){

    const IconUbicacion = L.icon({
        iconUrl: icon,
        iconShadow: iconShadow,
        iconSize: null,
        iconAnchor: null,
        shadowAnchor: null,
        popupAnchor: null
    })

    return(IconUbicacion)
}

export default IconLocation
