"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/map.module.scss';
import L from 'leaflet';
import { useEffect } from 'react';

// Icons personnalisés pour la carte
const customIcon = new L.Icon({
  iconUrl: '/images/marker-icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapWithMarkers() {
  useEffect(() => {
    // Utilisation de la méthode propre pour définir les icônes sans interférer avec _getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/icons/marker-icon-2x.png',
      iconUrl: '/icons/marker-icon.png',
      shadowUrl: '/icons/marker-shadow.png',
    });
  }, []);

  return (
    <section className={styles.mapContainer}>
      <MapContainer center={[79, 2.5]} zoom={3} style={{ height: '500px', width: '1500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marqueur pour Paris */}
        <Marker position={[48.8566, 2.3522]} icon={customIcon}>
          <Popup>Paris, France</Popup>
        </Marker>

        {/* Marqueur pour Bordeaux */}
        <Marker position={[44.8378, -0.5792]} icon={customIcon}>
          <Popup>Bordeaux, France</Popup>
        </Marker>

        {/* Marqueur pour Tours */}
        <Marker position={[47.3941, 0.6848]} icon={customIcon}>
          <Popup>Tours, France</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
