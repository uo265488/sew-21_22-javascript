const DIGITS = '0123456789';
const OPERATORS = "+-/*";

class Calculadora {

    constructor() {
        this.memory = 0;
        this.pantalla = String('');
    }

    digitos(num) {
        this.pantalla += String(num);
        this.showPantalla();
    }

    punto() {
        this.pantalla += '.';
        this.showPantalla();
    }

    suma() {
        this.pantalla += " + ";
        this.showPantalla();
    }

    resta() {
        this.pantalla += " - ";
        this.showPantalla();
    }
    
    multiplicacion() {
        this.pantalla += ' * ';
        this.showPantalla();
    }

    division() {
        this.pantalla += ' / ';
        this.showPantalla();
    }

    mrc() {
        this.pantalla = String(this.memory);
        this.showPantalla();
    }

    mMas() {
        if(String(this.pantalla) != "") {
            this.memory = Number(this.memory) + eval(this.pantalla) ;
        } else {
            alert('No se puede guardar una expresión vacía. ');
        }
    }

    mMenos() {
        if(String(this.pantalla) != "") {
            this.memory = Number(this.memory) - eval(this.pantalla) ;
        } else {
            alert('No se puede guardar una expresión vacía. ');
        }
    }

    borrar() {
        this.pantalla = this.pantalla.substr(0, this.pantalla.length - 1);
        this.showPantalla();
    }

    isValidFormat() { 
       try {
        this.pantalla = String(eval(this.pantalla));
       } catch(e) {
           this.pantalla = "";
           document.getElementById("pantalla").value = String("SYNTAX ERROR");
           return false;
       }
       return true;
    }

    showPantalla() {
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    igual () {
        if( this.pantalla == "") {
            alert('No se puede operar con una expresión vacía. ')
        }else if (this.isValidFormat()) {
            this.pantalla = String(eval(this.pantalla));
            this.showPantalla();
            
        }

    }
}

var calculadora = new Calculadora();