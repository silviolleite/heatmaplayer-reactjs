import React, {useState} from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapLayer from './HeatmapLayer';
import { addressPoints } from './realworld.10000.js';

export default function HeatMap(props) {
    const [position] = useState([51.505, -0.09]);
    return (
        <Map center={position} minZoom={3} maxZoom={18} zoom={5} id="mapUI">

            <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={addressPoints}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => parseFloat(m[2])} />
            <TileLayer
                url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
        </Map>
    );
}