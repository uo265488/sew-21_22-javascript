class MyFileReader {

    constructor() {
        this.position = 0;

    }

    obtenerInformacionDeLosArchivos() {
        var archivos = document.querySelector('input').files,
            nArchivos = archivos.length;

        for (var i = 0; i < nArchivos; i++) {
            this.mostrarInformacionArchivo(archivos[i], i + this.position);
            this.leerArchivo(archivos[i], i + this.position);
        }
        
        this.position += nArchivos;
        
    }

    mostrarInformacionArchivo(archivo, position) {

        var nombre = archivo.name;
        var tamaño = archivo.size;
        var tipo = archivo.type;
        var ultimaModificacion = archivo.lastModifiedDate;

        var section = "<section><h2>Archivo " + nombre + " : </h2>";
        section += "<ul><li> Tamaño: " + tamaño + " bytes. </li>";
        section += "<li> Tipo de archivo: " + tipo + ".</li>";
        section += "<li> Última modificación: " + ultimaModificacion + ". </li>";
        section += "<li> Contenido: </li></ul></section>";
        section += "<section id=" + position + "></section>";

        document.querySelector('main').innerHTML = document.querySelector('main').innerHTML + section;

    }

    leerArchivo(archivo, id) {
        //Solamente admite archivos de tipo texto
        var tipoTexto = /text.*/;
        var json ='application/json';
        if (archivo.type.match(tipoTexto)  ||  archivo.type.match(json))
        {
            var lector = new FileReader();
                lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                document.getElementById(String(id)).innerText += lector.result;
            }      
            lector.readAsText(archivo);
        } else {
            document.getElementById(String(id)).innerText = "ERROR: no se ha podido leer el archivo.";
        }
    }

}

var reader = new MyFileReader();

if (!(window.File && window.FileReader && window.FileList && window.Blob)) { 
    document.write("<section><h1>ERROR:</h1><p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p></section>");
}