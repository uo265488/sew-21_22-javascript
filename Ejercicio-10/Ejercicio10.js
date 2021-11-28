
class Bitcoin {
    constructor(){
        this.url = "https://api.coingecko.com/api/v3/coins/bitcoin"
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
    }

    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                
                    var stringDatos = "<ul><li>Nombre: " + datos.name + "</li>";
                    stringDatos += "<li>Símbolo: " + String(datos.symbol).toUpperCase() + "</li>";
                    stringDatos += "<li>Descripción: " + datos.description.es  + "</li>";
                    stringDatos += '<li>Fecha de creación: ' + datos.genesis_date  + '</li>';
                    stringDatos += '<li>Posición en el ranking del mercado: ' + datos.market_cap_rank  + '</li>';
                    stringDatos += '<li>Icono:</li>  <img src=' + datos.image.large  + ' alt="BTC"/></ul>';

                                      
                    $("h2").after(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });

        $("button").attr("disabled","disabled");
    }

    compararConEUR() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<p id=btcPrice">Bitcoin price: ' + datos.market_data.current_price.eur + ' EUR. </p>';
                                      
                    $("#btcPrice").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });


    }

    compararConETH() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<p id=btcPrice">Bitcoin price: ' + datos.market_data.current_price.eth + ' ETH. </p>';
                                      
                    $("#btcPrice").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });


    }

    compararConUSD() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<p id=btcPrice">Bitcoin price: ' + datos.market_data.current_price.usd + ' USD. </p>';
                                      
                    $("#btcPrice").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });


    }

    compararConUSD() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<p id=btcPrice">Bitcoin price: ' + datos.market_data.current_price.usd + ' USD. </p>';
                                      
                    $("#btcPrice").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });


    }

    compararConBNB() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<p id=btcPrice">Bitcoin price: ' + datos.market_data.current_price.bnb + ' BNB. </p>';
                                      
                    $("#btcPrice").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }

    compararConXRP() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<p id=btcPrice">Bitcoin price: ' + datos.market_data.current_price.xrp + ' XRP. </p>';
                                      
                    $("#btcPrice").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }

    mostrarEvolucionEnElTiempo() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                

                    var stringDatos = '<ul><li>Bitcoin porcentaje de cambio en las últimas 24 horas:  ' + datos.market_data.price_change_percentage_24h + ' %</li>';
                    stringDatos += '<li> Bitcoin porcentaje de cambio en los últimos 7 días:  ' + datos.market_data.price_change_percentage_7d + ' %</li>';
                    stringDatos += '<li> Bitcoin porcentaje de cambio en las últimas 2 semanas:  ' + datos.market_data.price_change_percentage_14d + ' %</li>';
                    stringDatos += '<li> Bitcoin porcentaje de cambio en el último mes:  ' + datos.market_data.price_change_percentage_30d + ' %</li>';
                    stringDatos += '<li> Bitcoin porcentaje de cambio en los últimos dos meses:  ' + datos.market_data.price_change_percentage_60d + ' %</li>';
                    stringDatos += '<li> Bitcoin porcentaje de cambio en los últimos 200 días:  ' + datos.market_data.price_change_percentage_200d + ' %</li>';
                    stringDatos += '<li> Bitcoin porcentaje de cambio en el último año:  ' + datos.market_data.price_change_percentage_1y + ' %</li></ul>';
                    
                    $('ul:nth-child(3)').html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });

    }


}

var bitcoin = new Bitcoin();