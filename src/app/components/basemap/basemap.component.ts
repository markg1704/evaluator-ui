import { Component, OnInit } from '@angular/core';

import Map from '@arcgis/core/Map';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-basemap',
  templateUrl: './basemap.component.html',
  styleUrls: ['./basemap.component.css']
})
export class BasemapComponent implements OnInit {

  map: Map = {} as Map;
  
  constructor(){}

  async initialiseMap() {

    const [Map, MapView, SpatialReference] = await loadModules(
      [
        'esri/Map',
        'esri/views/MapView',
        'esri/geometry/SpatialReference'
      ]
    );

    this.map = new Map({
      basemap: 'streets-vector',
      spatialReference: SpatialReference.WGS84,
      layers: []
    });

    const view = new MapView({
      container: 'mapView',
      map: this.map,
      ui: {
        components: ["attribution"]
      },
      center: [-1.89471, 52.48478],
      zoom: 10
    });


  }
  
  ngOnInit(): void {
    this.initialiseMap();
  }

}
