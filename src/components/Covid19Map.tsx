import { LayersControl, MapContainer, Pane } from 'react-leaflet';
import Leaflet from 'leaflet';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapInitializer } from './handler/MapInitializer';
import { MapEventHandler } from './handler/MapEventHandler';
import { AdditionalControls } from './controls/AdditionalControls';
import { OSMBaseLayer } from './layers/BaseLayers/OSMBaseLayer';
import { GSIBaseLayer } from './layers/BaseLayers/GSIBaseLayer';
import { JapanPrefOverlayLayer } from './layers/GeoJSONLayers/JapanPrefOverlayLayer';
import { JapanCityOverlayLayer } from './layers/GeoJSONLayers/JapanCityOverlayLayer';
import { NewsMarkerLayers } from './layers/MarkerLayers/NewsMarkerLayers';

const CrisisMap = () => {
  useEffect(() => {
    delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: 'images/marker-icon-2x.png',
      iconUrl: 'images/marker-icon.png',
      shadowUrl: 'images/marker-shadow.png',
    });
  }, []);
  return (
    <MapContainer
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <MapInitializer />
      <MapEventHandler />
      <AdditionalControls />
      <LayersControl position='topright'>
        <OSMBaseLayer />
        <GSIBaseLayer />
        <Pane name='pref-city-overlay' style={{ zIndex: 500 }}>
          <JapanPrefOverlayLayer />
          <JapanCityOverlayLayer />
        </Pane>
        <Pane name='marker-overlay' style={{ zIndex: 700 }}>
          <NewsMarkerLayers />
        </Pane>
      </LayersControl>
    </MapContainer>
  );
};

export default CrisisMap;
