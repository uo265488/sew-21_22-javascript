
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
        $("h1").text("Bill Gates, one of the biggest contributors to software development:");
        
    }

    traducirTituloEspañol() {
        $("h1").text("Bill Gates, uno de los mayores contribuyentes a la informática:");
    }   

    añadirFoto() {
        $('input[value="Añadir foto"]').before('<img src="multimedia/BillGates.png" alt="Bill Gates."  />');
    }

    borrarH3() {
        $('h3').remove();
    }

    borrarGestion() {
        $('section:last-child').remove();
    }

    añadirBotonEliminarTodo() {
        $('input[value="Añadir botón de eliminar secciones"]').after('<input type="button" value="Borrar todas las secciones" onClick= gestor.borrarSecciones()>');
    }

    borrarSecciones() {
        $("section").remove();
    }

    recorrarYMostrarPadres() {
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    contarFilasYColumnas() {
        var numFilas = 0;
        var numColumnas = 0;
        $("tr").each(function() {
            numFilas += 1;
        });

        $("td").each(function() {
            numColumnas += 1;
        });

        $("th").each(function() {
            numColumnas += 1;
        });

        $('input[value="Contar filas y columnas"]').after("<p> La tabla tiene " + numFilas + " filas y " 
        + String(numColumnas / numFilas) + " columnas. </p>")
    }
}

var gestor = new GestorWeb();
