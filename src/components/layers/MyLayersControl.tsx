import React from 'react';
import { LayersControl } from 'react-leaflet';
import { FireDeptLayers } from './markers/FireDeptMarkerLayers';
import { GSIBaseLayer } from './tiles/GSIBaseLayer';
import { GsiReliefOverlayLayer } from './tiles/GsiReliefOverlayLayer';
import { NowcastOverlayLayer } from './tiles/NowcastOverlayLayer';
import { OSMBaseLayer } from './tiles/OSMBaseLayer';
import { JapanPrefOverlayLayer } from './tiles/JapanPrefOverlayLayer';
import { JapanCityOverlayLayer } from './tiles/JapanCityOverlayLayer';

export const MyLayersControl = () => {
  return (
    <LayersControl position='topright'>
      <OSMBaseLayer />
      <GSIBaseLayer />
      <NowcastOverlayLayer />
      <GsiReliefOverlayLayer />
      <JapanPrefOverlayLayer />
      <JapanCityOverlayLayer />
      <FireDeptLayers />
    </LayersControl>
  );
};