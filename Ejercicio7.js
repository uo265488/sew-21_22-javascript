
class GestorWeb {

    constructor() {

    }

    ocultarParrafos() {
        $("p").hide();
    }

    mostrarParrafos() {
        $("p").show();
    }

    ocultarTabla() {
        $("table").hide();
    }

    mostrarTabla() {
        $("table").show();
    }

    ocultarLista() {
        $("ul").hide();
    }

    mostrarLista() {
        $("ul").show();
    }

    traducirTituloIngles() {
        $("#titulo").text("Bill Gates, one of the biggest contributors to software development:");
        
    }

    traducirTituloEspañol() {
        $("#titulo").text("Bill Gates, uno de los mayores contribuyentes a la informática:");
    }   
}

var gestor = new GestorWeb();