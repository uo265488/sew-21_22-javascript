class CalculadoraCientifica extends Calculadora {
    
    constructor() {
        super();
        this.radianes = true;
        this.hyperbolic = false;
        this.isNotacionCientifica = false;
    }

    deg() {
        if ( this.isValidFormat()) {
            this.igual();
            if(this.radianes) {
                super.pantalla = (eval(this.pantalla)) / ((Math.PI) / 180);
                super.showPantalla();
                this.radianes = false;
                document.getElementById("RadDeg").value = "RAD";
            } else {
                super.pantalla = (eval(this.pantalla)) * ((Math.PI) / 180);
                super.showPantalla();
                this.radianes = true;
                document.getElementById("RadDeg").value = "DEG";
            }
        }
    }

    hyp() {
        if(this.hyperbolic) {
            document.getElementById("sen").value = "sen";
            document.getElementById("cos").value = "cos";
            document.getElementById("tan").value = "tan";
            this.hyperbolic = false;
        } else {
            document.getElementById("sen").value = "senh";
            document.getElementById("cos").value = "cosh";
            document.getElementById("tan").value = "tanh";
            this.hyperbolic = true;
        }
    }

    FE() {
        if(!this.isNotacionCientifica) {
            this.pantalla = Number(this.pantalla).toExponential().replace(/e\+?/, ' x 10^');
            document.getElementById("pantalla").
            this.isNotacionCientifica = true;
        } else {
            alert('Falta implementar. ');
        }
    }

    MC() {
        super.memory = 0;
    }

    MR() {
        super.mrc();
    }

    mMas() {
        super.mMas();
    }

    mMenos() {
        super.mMenos();
    }

    MS() {
        this.igual();
        super.memory = Number(this.pantalla);
    }

    cuadrado() {
        this.pantalla += '**2';
        super.showPantalla();
    }

    elevadoY() {
        this.pantalla += '**';
        super.showPantalla();
    }

    sin() {
        if (this.hyperbolic) {
            this.pantalla += 'senh(';
            super.showPantalla();
        } else {
            this.pantalla += 'sen(';
            super.showPantalla();
        }
    }

    cos() {
        if (this.hyperbolic) {
            this.pantalla += 'cosh(';
            super.showPantalla();
        } else {
            this.pantalla += 'cos(';
            super.showPantalla();
        }
    }

    tan() {
        if (this.hyperbolic) {
            this.pantalla += 'tanh(';
            super.showPantalla();
        } else {
            this.pantalla += 'tan(';
            super.showPantalla();
        }
    }

    raiz() {
        this.pantalla += '√';
        super.showPantalla();
    }

    potenciaBase10() {
        this.pantalla += '10**';
        super.showPantalla();
    }

    log() {
        this.pantalla += 'log(';
        super.showPantalla();
    }

    Exp() {
        this.pantalla += 'e';
        super.showPantalla();
    }

    mod() {
        this.pantalla += '%';
        super.showPantalla();
    }

    flechaArriba() {

    }

    CE() {
        this.pantalla = "";
        super.showPantalla();
    }

    C() {
        this.pantalla = String(this.pantalla).substr(0, String(this.pantalla).length - 1);
        super.showPantalla();
    }

    pi() {
        this.pantalla += "pi";
        super.showPantalla();
    }

    factorial() {
        this.pantalla += "!";
        super.showPantalla();
    }

    abreParentesis() {
        this.pantalla += "(";
        super.showPantalla();
    }

    cierraParentesis() {
        this.pantalla += ")";
        super.showPantalla();
    }

    igual() {
        super.igual();
    }

    isValidFormat() {
        return super.isValidFormat();
    }

}

var calculadoraCientifica = new CalculadoraCientifica();

