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
        //parsearlo con jquery
        var marcadores = $('coordinates');
        var coordinates = "";

        for(var i = 0; i < marcadores.length; i++) {
            coordinates = String(marcadores[i].innerText).split(",")
            this.añadirMarcador(coordinates[0], coordinates[1]);
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

    añadirMarcador(long, lat){
        new mapboxgl.Marker()
                    .setLngLat([long, lat])
                    .addTo(this.map);
    }

    leerArchivo(archivo) {
        //Solamente admite archivos de tipo texto
        var tipoTexto = /text.*/;
        if (archivo.type.match(tipoTexto)) 
        {
            var lector = new FileReader();
                lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                document.querySelector('section:last-child').innerHTML = lector.result;
            }      
            lector.readAsText(archivo);
        } else {

        }
    }
}

var reader = new MyFileReader();

if (!(window.File && window.FileReader && window.FileList && window.Blob)) { 
    document.write("<section><h1>ERROR:</h1><p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p></section>");
}

    
    
    