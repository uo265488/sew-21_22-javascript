// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoidW8yNjU0ODgiLCJhIjoiY2t3YjJzNWF6MGI5djJucWtqc3p4anFrMSJ9.SdDNps_DxnoQxgDxfKERsw';

   
      
class Initializer {
    constructor() {
    }
   
    initialize() {
        this.map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-5.84476, 43.36029], // starting position [lng, lat]
            zoom: 13// starting zoom
        });
        
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.FullscreenControl());
        this.map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    
        this.geocoder = new MapboxGeocoder({
            // Initialize the geocoder
            accessToken: mapboxgl.accessToken, // Set the access token
            mapboxgl: mapboxgl, // Set the mapbox-gl instance
            marker: false // Do not use the default marker style
          });
          
          // Add the geocoder to the map
          this.map.addControl(this.geocoder);
    }
}

var initializer = new Initializer();