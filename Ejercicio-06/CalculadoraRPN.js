const DIGITS = '0123456789';
const OPERATORS = "+-/*";
const PUNTO = ".";
const SUMA = "+";
const RESTA = "-";
const DIVISION = "÷";
const SENO = "sen";
const COSENO = "cos";
const TANG = "tan";
const ASENO = "asen";
const ACOSENO = "acos";
const ATANG = "atan";
const MULTIPLICACION = "x";
const unaryOperators = [SENO, COSENO, TANG, ASENO, ACOSENO, ATANG];
const binaryOperators = [SUMA, RESTA, DIVISION, MULTIPLICACION];

class PilaLIFO { 
    constructor (){ 
        this.pila = new Array();
    }

    apilar(valor){
        this.pila.push(valor);
    }

    desapilar(){
        return (this.pila.pop());
    }

    mostrar(){
        var stringPila = "";
        for (var i in this.pila) {
            stringPila = stringPila + "\n" + (this.pila.length - i) + ": " + this.pila[i] ;
        }
        document.getElementById("pila").value = stringPila;
    }

    size() {
        return this.pila.length;
    }
}

class CalculadoraRPN {

    constructor() {
        this.pantalla = '';
        this.pila = new PilaLIFO();

        this.activateKeyEvents();
    }

    activateKeyEvents() {
        document.addEventListener('keydown', (event) => {
            if ( event.key == 'Enter') {
                this.enter();
            } else if ( event.key == '0') {
                this.digitos(0);
            }  else if ( event.key == '1') {
                this.digitos(1);
            } else if ( event.key == '2') {
                this.digitos(2);
            } else if ( event.key == '3') {
                this.digitos(3);
            } else if ( event.key == '4') {
                this.digitos(4);
            } else if ( event.key == '5') {
                this.digitos(5);
            } else if ( event.key == '6') {
                this.digitos(6);
            } else if ( event.key == '7') {
                this.digitos(7);
            } else if ( event.key == '8') {
                this.digitos(8);
            } else if ( event.key == '9') {
                this.digitos(9);
            } else if ( event.key == 'Backspace') {
                this.borrar();
            } else if ( event.key == '*') {
                this.multiplicacion();
            } else if ( event.key == '+') {
                this.suma();
            } else if ( event.key == '-') {
                this.resta();
            } else if ( event.keyC == '.') {
                this.punto();
            } else if ( event.key == '/') {
                this.division();
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
        this.pantalla = SUMA;
        this.showPantalla();
    }

    resta() {
        this.pantalla = RESTA;
        this.showPantalla();
    }
    
    multiplicacion() {
        this.pantalla = MULTIPLICACION;
        this.showPantalla();
    }

    division() {
        this.pantalla = DIVISION;
        this.showPantalla();
    }

    sen() {
        this.pantalla = SENO;
        this.showPantalla();
    }

    cos() {
        this.pantalla = COSENO;
        this.showPantalla();
    }

    tan() {
        this.pantalla = TANG;
        this.showPantalla();
    }

    asen() {
        this.pantalla = ASENO;
        this.showPantalla();
    }

    acos() {
        this.pantalla = ACOSENO;
        this.showPantalla();
    }

    atan() {
        this.pantalla = ATANG;
        this.showPantalla();
    }

    CE() {
        this.pila.desapilar();
        this.pila.mostrar();
        this.showPantalla();
    }

    borrar() {
        this.pantalla = this.pantalla.substr(0, this.pantalla.length - 1);
        this.showPantalla();
    }

    enter() {
        if(!String(this.pantalla) == '') {

            if (!isNaN(Number(this.pantalla))) {
                this.pila.apilar(this.pantalla);
                this.pila.mostrar();
        
                this.pantalla = '';
                this.showPantalla();
        
            } else if (this.isUnaryOperator()) {
                this.performUnaryOperation();
            } else if(this.isBinaryOperator()) {
                this.performBinaryOperation();
            } 
            else {
                alert('SYNTAX ERROR');
            }
        }else {
            alert('The input cannot be empty. ');
        }
    }

    performBinaryOperation() {
        if(this.pila.size() > 1) {
            if( String(this.pantalla) == "+") {
                var operando1 = Number(this.pila.desapilar());
                var operando2 = Number(this.pila.desapilar());
                this.pila.apilar(String(operando1 + operando2));
                this.pila.mostrar();
            } else if( String(this.pantalla) == RESTA) {
                var operando1 = Number(this.pila.desapilar());
                var operando2 = Number(this.pila.desapilar());
                this.pila.apilar(String(operando1 - operando2));
                this.pila.mostrar();
            } else if( String(this.pantalla) == MULTIPLICACION) {
                var operando1 = Number(this.pila.desapilar());
                var operando2 = Number(this.pila.desapilar());
                this.pila.apilar(String(operando1 * operando2));
                this.pila.mostrar();
            } else if( String(this.pantalla) == DIVISION) {
                var operando1 = Number(this.pila.desapilar());
                var operando2 = Number(this.pila.desapilar());
                this.pila.apilar(String(operando2 / operando1));
                this.pila.mostrar();
            } 
            this.pila.mostrar();
            this.pantalla = "";
            this.showPantalla();
        } else {
            alert("No hay suficientes operandos. ");
        }
    }

    performUnaryOperation() {
        if ( this.pila.size() > 0) {
            if( String(this.pantalla) == SENO) {
                this.pila.apilar( Math.sin(Number(this.pila.desapilar())));
            } else if( String(this.pantalla) == COSENO) {
                this.pila.apilar( Math.cos(Number(this.pila.desapilar())));
            } else if( String(this.pantalla) == TANG) {
                this.pila.apilar( Math.tan(Number(this.pila.desapilar())));
            } else if( String(this.pantalla) == ASENO) {
                this.pila.apilar( Math.asin(Number(this.pila.desapilar())));
            } else if( String(this.pantalla) == ACOSENO) {
                this.pila.apilar( Math.acos(Number(this.pila.desapilar())));
            } else if( String(this.pantalla) == ATANG) {
                this.pila.apilar( Math.atan(Number(this.pila.desapilar())));
            }
            this.pila.mostrar();
            this.pantalla = "";
            this.showPantalla();
        } else {
            alert("No hay suficientes operandos. ")
        }
        

    }

    isBinaryOperator() {
        return binaryOperators.indexOf(String(this.pantalla)) != -1;
    }

    isUnaryOperator() {
        return unaryOperators.indexOf(String(this.pantalla)) != -1;
    }

    hasDoublePoint() {
        var counter = 0;
        for(var i = 0; i < this.pantalla.length; i++) {
            if(this.pantalla[i] == '.') {
                counter++;
            }
            if(counter == 2) {
                return true;
            }
            if(OPERATORS.indexOf(this.pantalla[i]) != -1) {
                counter = 0;
            }
        }
        return false;
    }

    isPointAlone() {
        if (this.pantalla.length == 1 && this.pantalla[0] == '.') {
            return true;
        } else if(this.pantalla.length == 2 && this.pantalla[0] == '.' && DIGITS.indexOf(this.pantalla[1]) == -1) {
            return true;
        } else {
            for(var i = 0; i < this.pantalla.length; i++) {
                if(this.pantalla[i] == '.') {
                    if(DIGITS.indexOf(this.pantalla[i - 1]) == -1 && DIGITS.indexOf(this.pantalla[i + 1]) == -1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    showPantalla() {
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    getPila() {
        return this.pila;
    }

    getPantalla() {
        return this.pantalla;
    }

}

var calculadoraRPN = new CalculadoraRPN();