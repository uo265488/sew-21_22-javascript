mapboxgl.accessToken = 'pk.eyJ1IjoidW8yNjU0ODgiLCJhIjoiY2t3YjJzNWF6MGI5djJucWtqc3p4anFrMSJ9.SdDNps_DxnoQxgDxfKERsw';

class MyFileReader {

    constructor() {
        this.map = document.getElementById("map");

        this.generarMapa();
    }

    obtenerInformacionDelArchivo() {
        var archivo = document.getElementById("subirArchivos").files;

        this.leerArchivo(archivo[0]);
    }

    añadirMarcadores() {

        var objeto = JSON.parse(document.getElementById("kml").innerText);

        for(var i = 0; i < objeto.features.length; i++) {

            this.añadirMarcador(objeto.features[i].geometry.coordinates[0], objeto.features[i].geometry.coordinates[1]);
        }
    }

    generarMapa() {

        this.map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-5.84476, 43.36029], // starting position [lng, lat]
            zoom: 13// starting zoom
        });
    }

    añadirMarcador(lat, long){
        new mapboxgl.Marker()
                    .setLngLat([lat, long])
                    .addTo(this.map);
    }

    leerArchivo(archivo) {
        var lector = new FileReader();
        lector.onload = function (evento) {

            document.getElementById("kml").innerText = lector.result;
            
        }      
        lector.readAsText(archivo);
    
    }
}

var reader = new MyFileReader();

if (!(window.File && window.FileReader && window.FileList && window.Blob)) { 
    document.write("<section><h1>ERROR:</h1><p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p></section>");
}

    
    
    