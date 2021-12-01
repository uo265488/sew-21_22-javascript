mapboxgl.accessToken = 'pk.eyJ1IjoidW8yNjU0ODgiLCJhIjoiY2t3YjJzNWF6MGI5djJucWtqc3p4anFrMSJ9.SdDNps_DxnoQxgDxfKERsw';

class MyFileReader {

    constructor() {

        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));

        this.map = document.getElementById("map");
    }

    obtenerInformacionDelArchivo() {
        var archivo = document.querySelector("input[type='file']").files;

        this.leerArchivo(archivo[0]);
    }

    generarMapa() {
        var archivo = document.querySelector("input[type='file']").files;
        if (archivo.length > 0) {
            this.map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [this.longitud, this.latitud], // starting position [lng, lat]
                zoom: 13// starting zoom
            });

            const distanceContainer = document.querySelector('h3');
            // GeoJSON object to hold our measurement features


            const geojson = this.generateGjson();

            // Used to draw a line between points
            const linestring = {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': []
                }
            };

            this.map.on('load', () => {
                this.map.addSource('geojson', {
                    'type': 'geojson',
                    'data': geojson
                });
                // Add styles to the map
                this.map.addLayer({
                    id: 'measure-points',
                    type: 'circle',
                    source: 'geojson',
                    paint: {
                        'circle-radius': 5,
                        'circle-color': '#000'
                    },
                    filter: ['in', '$type', 'Point']
                });
                this.map.addLayer({
                    id: 'measure-lines',
                    type: 'line',
                    source: 'geojson',
                    layout: {
                        'line-cap': 'round',
                        'line-join': 'round'
                    },
                    paint: {
                        'line-color': '#000',
                        'line-width': 2.5
                    },
                    filter: ['in', '$type', 'LineString']
                });

                this.map.on('click', (e) => {
                    const features = this.map.queryRenderedFeatures(e.point, {
                        layers: ['measure-points']
                    });

                    // Remove the linestring from the group
                    // so we can redraw it based on the points collection.
                    if (geojson.features.length > 1) geojson.features.pop();

                    // Clear the distance container to populate it with a new value.
                    distanceContainer.innerHTML = '';

                    // If a feature was clicked, remove it from the map.
                    if (features.length) {
                        const id = features[0].properties.id;
                        geojson.features = geojson.features.filter(
                            (point) => point.properties.id !== id
                        );
                    } else {
                        const point = {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [e.lngLat.lng, e.lngLat.lat]
                            },
                            'properties': {
                                'id': String(new Date().getTime())
                            }
                        };

                        geojson.features.push(point);
                    }

                    if (geojson.features.length > 1) {
                        linestring.geometry.coordinates = geojson.features.map(
                            (point) => point.geometry.coordinates
                        );

                        geojson.features.push(linestring);

                        // Populate the distanceContainer with total distance
                        const value = document.createElement('pre');
                        const distance = turf.length(linestring);
                        value.textContent = `Total distance: ${distance.toLocaleString()}km`;
                        distanceContainer.appendChild(value);
                    }

                    this.map.getSource('geojson').setData(geojson);
                });
            });

            this.map.on('mousemove', (e) => {
                const features = this.map.queryRenderedFeatures(e.point, {
                    layers: ['measure-points']
                });
                // Change the cursor to a pointer when hovering over a point on the map.
                // Otherwise cursor is a crosshair.
                this.map.getCanvas().style.cursor = features.length
                    ? 'pointer'
                    : 'crosshair';
            });


        } else {
            alert('Carga un archivo para poder iniciar el mapa con la traza. ')
        }

    }

    generateGjson() {

        //parsearlo con jquery
        var marcadores = $('coordinates');
        var coordinates = "";

        var geojson = {
            'type': 'FeatureCollection',
            'features': []
        };

        geojson.features.push(this.añadirPunto(this.longitud, this.latitud));

        for (var i = 0; i < marcadores.length; i++) {
            coordinates = String(marcadores[i].innerText).split(",")
            geojson.features.push(this.añadirPunto(coordinates[0], coordinates[1]));
        }
        return geojson;
    }

    añadirPunto(long, lat) {
        return {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [long, lat]
            }
        };
    }

    leerArchivo(archivo) {
        if (archivo.type.substring(archivo.type.length - 3) == "xml" || archivo.type.substring(archivo.type.length - 3) == "kml") {
            var lector = new FileReader();
            lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                document.querySelector('section:last-child').innerHTML = "Contenido del KML: " + lector.result;
            }
            lector.readAsText(archivo);
        } else {
            alert('El archivo no es del tipo apropiado');
        }
    }

    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }

    fullScreen() {
        document.getElementById('map').requestFullscreen();
    }

    exitFullScreen() {
        document.getElementById('map').exitFullscreen()
    }

}

var reader = new MyFileReader();

if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    document.write("<section><h1>ERROR:</h1><p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p></section>");
}



