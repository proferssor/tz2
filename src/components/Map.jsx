import React from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { getPointsSelector } from '../selectors/PointsSelector';
import { useSelector } from 'react-redux';

const AutoFitBound = ({ bounds }) => {
   const map = useMap();
   useEffect(() => {
      if (!map || bounds.length === 0) return;
      map.fitBounds(bounds);
   }, [map, bounds]);
   return null;
};

const center = [52.51687599248987, 13.379721337040621]
const Map = () => {
   const route = useSelector(getPointsSelector)

   setTimeout(() => {
      console.log(route);
   }, 5000);

   const [points, setPoints] = useState([]);
   const [bounds, setBounds] = useState([]);
   const [markerFrom, setMarkerFrom] = useState(null)
   const [markerTo, setMarkerTo] = useState(null)

   useEffect(() => {
      if (route) {
         const points = route.routes[0].geometry.coordinates.map((arr) => [
            arr[1],
            arr[0],
         ]);
         setPoints(points);
         const originPoint = { lat: points[0][0], lng: points[0][1] };
         const destinationPoint = {
            lat: points[points.length - 1][0],
            lng: points[points.length - 1][1],
         };
         setMarkerFrom(originPoint);
         setMarkerTo(destinationPoint);
         const newBounds = [originPoint, destinationPoint].map((m) => [
            m.lat,
            m.lng,
         ]);
         setBounds(newBounds);
      }
   }, [route])

   const icon = L.icon({
      iconUrl: './marker.png',
      iconSize: [38, 38],
   });

   const handleSetBounds = (bounds) => {
      setBounds(bounds);
   };
   return (
      <MapContainer style={{ width: '100%', height: '100vh', overflow: 'hidden' }} center={center} zoom={12} >
         <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
         />
         {/* <MapEvents /> */}

         <Polyline color={"red"} weight={8} positions={points}>
            <Popup>Polygon</Popup>
         </Polyline>

         {markerFrom && <Marker icon={icon} position={markerFrom} text="Погрузка" />}

         {markerTo && (
            <Marker icon={icon} position={markerTo} text="Загрузка" />
         )}

         <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />

      </MapContainer>
   )
}

export default Map