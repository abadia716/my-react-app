import React, { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { useGeographic } from 'ol/proj';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MapaComponent.css';

import 'ol/ol.css';

function MapaComponent() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const { projection } = useGeographic() ?? {};

  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [-76.5225, 3.43722],
        zoom: 12,
        projection, // establecer la proyección de la vista
      }),
    });

    setMap(initialMap);
  }, [projection]);

  useEffect(() => {
    if (map) {
      const markerCoords = [
        [0, 0],
        [-76.5225, 3.43722],
        [-50, -50],
      ];

      const markerFeatures = markerCoords.map((coord) => {
        return new Feature({
          geometry: new Point(coord),
        });
      });

      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: markerFeatures,
        }),
        style: new Style({
          image: new Icon({
            src: 'https://cdn.mapmarker.io/api/v1/fa/stack?size=45&color=dc143c&icon=square',
            imgSize: [45, 45],
            anchor: [0.5, 1],
          }),
        }),
      });

      map.addLayer(markerLayer);
    }
  }, [map]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mapa</h2>
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div
                className="map-container"
                ref={mapRef}
                aria-label="Mapa de ubicaciones"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaComponent;
