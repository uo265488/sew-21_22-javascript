class CalculadoraCientifica extends Calculadora {
    
    constructor() {
        super();
        this.activateKeyEvents();
        this.radianes = true;
        this.hyperbolic = false;
        this.isNotacionCientifica = false;
    }

    activateKeyEvents() {
        super.activateKeyEvents();
        
    }

    deg() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            this.igual();
            if(this.radianes) {
                super.pantalla = (eval(super.getPantalla())) / ((Math.PI) / 180);
                super.showPantalla();
                this.radianes = false;
                document.querySelector('input[value="DEG"]').value = "RAD";
            } else {
                super.pantalla = (eval(super.getPantalla())) * ((Math.PI) / 180);
                super.showPantalla();
                this.radianes = true;
                document.querySelector('input[value="RAD"]').value = "DEG";
            }
        }
    }

    hyp() {
        if(this.hyperbolic) {
            document.querySelector('input[value="sinh"]').value = "sin";
            document.querySelector('input[value="cosh"]').value = "cos";
            document.querySelector('input[value="tanh"]').value = "tan";
            this.hyperbolic = false;
        } else {
            document.querySelector('input[value="sin"]').value = "sinh";
            document.querySelector('input[value="cos"]').value = "cosh";
            document.querySelector('input[value="tan"]').value = "tanh";
            this.hyperbolic = true;
        }
    }

    FE() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            if(!this.isNotacionCientifica) {
                super.setPantalla(eval(String(super.getPantalla())).toExponential().replace(/e\+?/, ' x 10^'));
                super.showPantalla();
                this.isNotacionCientifica = true;
            } else {
                super.setPantalla(Number(super.getPantalla()));
                super.igual();
                super.showPantalla();
                this.isNotacionCientifica = !this.isNotacionCientifica;
            }
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
        super.memory = Number(super.pantalla);
    }

    cuadrado() {
        super.setPantalla(super.getPantalla() + '**2');
        super.showPantalla();
    }

    elevadoY() {
        super.setPantalla(super.getPantalla() + '**');
        super.showPantalla();
    }

    sin() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            if (this.hyperbolic) {
                super.setPantalla(String(Math.sinh(eval(super.getPantalla()))));
                super.showPantalla();
            } else {
                super.setPantalla(String(Math.sin(eval(super.getPantalla()))));
                super.showPantalla();
            }
        }
    }

    cos() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            if (this.hyperbolic) {
                super.setPantalla(String(Math.cosh(eval(super.getPantalla()))));
                super.showPantalla();
            } else {
                super.setPantalla(String(Math.cos(eval(super.getPantalla()))));
                super.showPantalla();
            }
        }
    }

    tan() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            if (this.hyperbolic) {
                super.setPantalla(String(Math.tanh(eval(super.getPantalla()))));
                super.showPantalla();
            } else {
                super.setPantalla(String(Math.tan(eval(super.getPantalla()))));
                super.showPantalla();
            }
        }
    }

    raiz() {
        if (String(super.getPantalla()) != String("")) {

            super.setPantalla(String(Math.sqrt(eval(super.getPantalla()))));
            super.showPantalla();
        }

    }

    potenciaBase10() {
        super.setPantalla(super.getPantalla() + '+10**');
        super.showPantalla();
    }

    log() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            super.setPantalla(Math.log(eval(super.getPantalla())));
            super.showPantalla();
        }
        
    }

    Exp() {
        super.setPantalla(String(super.getPantalla()) + 'e');
        super.showPantalla();
    }

    mod() {
        super.setPantalla(super.getPantalla() + '%');
        super.showPantalla();
    }

    flechaArriba() {
        alert('Esta funcionalidad está pendiente de desarrollo.');
    }

    CE() {
        super.setPantalla("");
        super.showPantalla();
    }

    C() {
        super.borrar();
    }

    borrar() {
        super.borrar();
    }

    pi() {
        super.setPantalla(super.getPantalla() + Math.PI.toString());
        super.showPantalla();
    }

    factorial() {
        super.igual();
        if (String(super.getPantalla()) != String("")) {
            var sum = 1;
            var num = eval(super.getPantalla());
            while(num > 1) {
                sum *= num;
                num --;
            }
    
            super.setPantalla(String(sum));
            this.showPantalla();
        }
        
    }

    abreParentesis() {
        super.setPantalla(super.getPantalla() + "(");
        super.showPantalla();
    }

    cierraParentesis() {
        super.setPantalla(super.getPantalla() + ")");
        super.showPantalla();
    }

    igual() {
        super.igual();
    }

    isValidFormat() {
        return super.isValidFormat();
    }

    masmenos() {
        this.igual();
        if (String(super.getPantalla()) != "") {
            super.setPantalla(eval(super.getPantalla()) * -1);
            super.showPantalla();
        }
        
    }
}

var calculadoraCientifica = new CalculadoraCientifica();

