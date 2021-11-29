const POTENCIA = " kW";
const TIEMPO = " h";
const PRECIO = " euros/kW";
const GRADO_AISLAMIENTO = " nivel de aislamiento"
const FACTORES = [POTENCIA, TIEMPO, PRECIO, GRADO_AISLAMIENTO];
const ANALISIS = "Obtener análisis ";

class CalculadoraEnergetica extends CalculadoraRPN {

    constructor() {
        super();
        this.unidadActual = POTENCIA;
        this.kwTotales = 0;
        this.euros = 0;
        this.horas = 0;
        this.aislamiento = 0;
    }

    cambiarFactor(factor) {
        if( factor == 'POTENCIA') {
            this.unidadActual = POTENCIA;
        } else if ( factor == 'TIEMPO') {
            this.unidadActual = TIEMPO;
        } else if (factor == 'AISLAMIENTO') {
            this.unidadActual = GRADO_AISLAMIENTO;
        } else if (factor == 'PRECIO') {
            this.unidadActual = PRECIO;
        }
    }


    suma() {
        if ( super.getPantalla() != ANALISIS) {
            super.suma();
        } else {
            super.pantalla = "";
            super.suma();
        }
    }

    resta() {
        if ( super.getPantalla() != ANALISIS) {
            super.resta();
        } else {
            super.pantalla = "";
            super.resta();
        }
    }

    digitos(num) {
        if ( super.getPantalla() != ANALISIS) {
            super.digitos(num);
        } else {
            super.pantalla = "";
            super.digitos(num);
        }

    }

    punto() {
        if ( super.getPantalla() != ANALISIS) {
            super.punto();
        } else {
            super.pantalla = "";
            super.punto();
        }
    }

    calcular() {
        super.pantalla = ANALISIS;
        super.showPantalla();
    }

    enter() {
        if ( String(super.getPantalla()).localeCompare(ANALISIS) == 0) {
            if(super.getPila().size() < 2) {
                alert('La pila debe contener al menos 2 elementos para llevar acabo el análisis. ');
            } else {
                this.aplicarFormula();
            }
        } else {
            if(super.getPantalla() != "") {
                super.getPila().apilar(String(this.pantalla) + this.unidadActual);
                super.getPila().mostrar();
                super.pantalla = "";
                super.showPantalla();
            } else {
               alert('El input no puede estar vacío.');
            }
        }
    }

    aplicarFormula() {

        var valor = super.getPila().desapilar();
        var valor2 = super.getPila().desapilar();

        this.calcularFormula(valor);

        super.getPila().apilar( this.calcularFormula(valor2));

        super.getPila().mostrar();

        super.pantalla = "";

        super.showPantalla();

    }
    

    calcularFormula(valor) {

        var potencia = ' kW';
        var precio = ' euros/kW';
        var tiempo = ' h';
        var aislamiento = ' nivel de aislamiento';
        var result = 0;

        if( String(valor).substring(String(valor).length - 3 ).match(potencia)) {
            this.kwTotales += Number(String(valor).substring(0, String(valor).length - 3));
        } else if( String(valor).substring(String(valor).length - 9 ).match(precio)) {
            this.euros += Number(String(valor).substring(0, String(valor).length - 9));
        } else if( String(valor).substring(String(valor).length - 2 ).match(tiempo)) {
            this.horas += Number(String(valor).substring(0, String(valor).length - 2));
            if (this.horas < 1) {
                this.horas = 1;
            }
        } else if( String(valor).substring(String(valor).length - 21).match(aislamiento)) {
            this.aislamiento += Number(String(valor).substring(0, String(valor).length - 21));
            if(this.aislamiento > 10) {
                this.aislamiento = 10;
            } else if (this.aislamiento < 0) {
                this.aislamiento = 0;
            }
        } 

        var aislamiento = (0.95 + this.aislamiento * 0.01)
        var kw = this.kwTotales * aislamiento;
        var kwPorHora = kw / this.horas;
        var euros = this.euros;

        result = kwPorHora * euros;

        return String(result) + ' euros ('+ this.kwTotales + 'kw totales de los dispositivos, ' 
        + this.horas + ' horas totales de funcionamiento, Grado de aislamiento ' + this.aislamiento 
        + '/10 y ' + this.euros + ' euros kw/h).';
    }
    

}

var calculadoraEnergetica = new CalculadoraEnergetica();