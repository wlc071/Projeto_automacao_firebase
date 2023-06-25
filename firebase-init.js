
const firebaseConfig = {
    apiKey: "AIzaSyANBGk97XWcM29MqBeBUZaouG2Qfu2PIXQ",
    authDomain: "comunicacao-esp8266.firebaseapp.com",
    databaseURL: "https://comunicacao-esp8266-default-rtdb.firebaseio.com",
    projectId: "comunicacao-esp8266",
    storageBucket: "comunicacao-esp8266.appspot.com",
    messagingSenderId: "114152057551",
    appId: "1:114152057551:web:be347ea0a6fb14cb42e5ba",
    measurementId: "G-8XBNQYE157"
};

firebase.initializeApp(firebaseConfig);

var estado_atual_1;
var estado_atual_2;
var estado_atual_3;
var estado_atual_4;
var led_boolean;

const database = firebase.database();
const pathRef_led_vermelho = database.ref('Sensor/led_vermelho');
const pathRef_led_verde = database.ref('Sensor/led_verde');
const pathRef_led_amarelo = database.ref('Sensor/led_amarelo');
const pathRef_luminosidade = database.ref('Sensor/sensor_ldr');
const pathRef_umidade = database.ref('Sensor/sensor_umidade_capacitivo');

pathRef_led_vermelho.on('value', (snapshot) => { // leitura do led vermelho
    const data = snapshot.val();
    console.log(data); //Status
    var aux = "";
    if (data == false){ aux = "Desligado";
    } else { aux = "Ligado"; }
    led_vermelho.innerHTML = aux;
});

pathRef_led_verde.on('value', (snapshot) => { // leitura do led verde
    const data = snapshot.val();
    console.log(data); //Status
    var aux = "";
    if (data == false){ aux = "Desligado";
    } else { aux = "Ligado"; }
    led_verde.innerHTML = aux;
});

pathRef_led_amarelo.on('value', (snapshot) => { // leitura do led amarelo
    const data = snapshot.val();
    console.log(data); //Status
    var aux = "";
    if (data == false){ aux = "Desligado";
    } else { aux = "Ligado"; }
    led_amarelo.innerHTML = aux;
});

pathRef_luminosidade.on('value', (snapshot) => { // leitura da luminosidade
    const data = snapshot.val();
    console.log(data); //Status
    luminosidade.innerHTML = data+" cd";
});

pathRef_umidade.on('value', (snapshot) => { // leitura da umidade
    const data = snapshot.val();
    console.log(data); //Status
    umidade.innerHTML = data;
});

function cliqueVermelho(){
    if(estado_atual_1 == "Ligado") { 
        estado_atual_1 = "Desligado"
        led_boolean = false;
    }else{ 
        estado_atual_1 = "Ligado" 
        led_boolean = true;
    }
    led_vermelho.innerHTML = estado_atual_1;

    database.ref('Sensor/led_vermelho').set(led_boolean).then(function() {
        console.log(led_boolean);
      }).catch(function(error) {
        console.error('Erro ao gravar dados:', error);
      });
}

function cliqueVerde(){
    if(estado_atual_2 == "Ligado") { 
        estado_atual_2 = "Desligado"
        led_boolean = false;
    }else{ 
        estado_atual_2 = "Ligado" 
        led_boolean = true;
    }
    led_verde.innerHTML = estado_atual_2;

    database.ref('Sensor/led_verde').set(led_boolean).then(function() {
        console.log(led_boolean);
      }).catch(function(error) {
        console.error('Erro ao gravar dados:', error);
      });
}

function cliqueAmarelo(){
    if(estado_atual_3 == "Ligado") { 
        estado_atual_3 = "Desligado"
        led_boolean = false;
    }else{ 
        estado_atual_3 = "Ligado" 
        led_boolean = true;
    }
    led_amarelo.innerHTML = estado_atual_3;

    database.ref('Sensor/led_amarelo').set(led_boolean).then(function() {
        console.log(led_boolean);
      }).catch(function(error) {
        console.error('Erro ao gravar dados:', error);
      });
}

const valores = {
    led_vermelho: ()=> document.getElementById('led_vermelho'),
    led_verde: ()=> document.getElementById('led_verde'),
    led_amarelo: ()=> document.getElementById('led_amarelo'),
    sensor_luminosidade: ()=> document.getElementById('sensor_luminosidade'),
    sensor_umidade: ()=> document.getElementById('sensor_umidade'),
    sensor_temperatura: ()=> document.getElementById('sensor_temperatura'),
}



  