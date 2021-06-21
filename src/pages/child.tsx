/// <reference types="@emotion/react/types/css-prop" />
import dynamic from 'next/dynamic';
import React from 'react';

const ChildMap = dynamic(() => import('../components/leaflet/ChildMap'), {
  ssr: false,
});

export const ChildMapView: React.VFC = () => {
  return <ChildMap />;
};

export default ChildMapView;
