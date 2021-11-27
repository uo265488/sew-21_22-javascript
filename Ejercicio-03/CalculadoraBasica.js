const DIGITS = '0123456789';
const OPERATORS = "+-/*";

class Calculadora {

    constructor() {
        this.memory = 0;
        this.pantalla = String('');
    }

    digitos(num) {
        this.pantalla += String(num);
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    punto() {
        this.pantalla += '.';
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    suma() {
        this.pantalla += " + ";
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    resta() {
        this.pantalla += " - ";
        document.getElementById("pantalla").value = String(this.pantalla);
    }
    
    multiplicacion() {
        this.pantalla += ' * ';
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    division() {
        this.pantalla += ' / ';
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    mrc() {
        this.pantalla = String(this.memory);
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    mMas() {
        this.memory = Number(this.memory) + eval(this.pantalla) ;
    }

    mMenos() {
        this.memory = Number(this.memory) - eval(this.pantalla);
    }

    borrar() {
        this.pantalla = this.pantalla.substr(0, this.pantalla.length - 1);
        document.getElementById("pantalla").value = String(this.pantalla);
    }

    isValidFormat() { 
        if (this.pantalla.length == 0) {
            alert('La pantalla no puede estar vacía. ');
        } else if (this.pantalla[0] == '0' && DIGITS.indexOf(this.pantalla[1]) != -1) {
            alert('Un dígito no puede empezar por "0". ')
        } else if(DIGITS.indexOf(this.pantalla.substr(this.pantalla.length-1, 1)) == -1 && this.pantalla.substr(this.pantalla.length-1, 1)!= '.') {
            alert('La fórmula no puede terminar en un operador. ')
        } else if (this.hasDoublePoint()) {
            alert('Formato de número inválido: un número tiene más de un punto.');
        } else if (this.isPointAlone()) {
            alert('Formato de número inválido: el punto no tiene digitos a la derecha ni a la izquierda. ');
        } else if (Number.isNaN(this.pantalla)) {
            alert("El resultado de la fórmula no es un número. ");
        } else if (this.pantalla.substr(0, 3) == 'NaN') {
            alert("La fórmula marcada no es un número. ");
        } else {
            //falta chekiar los octales
            //entrada por teclado
            return true;
        }        
    }

    igual () {
        if (this.isValidFormat()) {
            this.pantalla = String(eval(this.pantalla));
            document.getElementById("pantalla").value = String(this.pantalla);
        }
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

}

var calculadora = new Calculadora();