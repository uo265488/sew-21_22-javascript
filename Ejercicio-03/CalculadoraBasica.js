const DIGITS = '0123456789';
const OPERATORS = "+-/*";

class Calculadora {

    constructor() {
        this.memory = 0;
        this.pantalla = String('');

        document.addEventListener('keydown', (event) => {
            if ( event.keyCode == 13) {
                calculadora.igual();
            } else if ( event.keyCode == 48) {
                calculadora.digitos(0);
            }  else if ( event.keyCode == 49) {
                calculadora.digitos(1);
            } else if ( event.keyCode == 50) {
                calculadora.digitos(2);
            } else if ( event.keyCode == 51) {
                calculadora.digitos(3);
            } else if ( event.keyCode == 52) {
                calculadora.digitos(4);
            } else if ( event.keyCode == 53) {
                calculadora.digitos(5);
            } else if ( event.keyCode == 54) {
                calculadora.digitos(6);
            } else if ( event.keyCode == 55) {
                calculadora.digitos(7);
            } else if ( event.keyCode == 56) {
                calculadora.digitos(8);
            } else if ( event.keyCode == 57) {
                calculadora.digitos(9);
            } else if ( event.keyCode == 8) {
                calculadora.borrar();
            } else if ( event.keyCode == 106) {
                calculadora.multiplicacion();
            } else if ( event.keyCode == 107) {
                calculadora.suma();
            } else if ( event.keyCode == 109) {
                calculadora.resta();
            } else if ( event.keyCode == 110) {
                calculadora.punto();
            } else if ( event.keyCode == 111) {
                calculadora.division();
            }
          });
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