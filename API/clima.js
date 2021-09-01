// APIkey : 2a21e0d08653f1bdf855fccb029e29f0
// ID Cuidad: Santa Cruz : "id": 5393052
// ID Cuidad: Trinidad : "id": 5442007

//URL: api.openweathermap.org/data/2.5/weather?id=5393052&units=metric&appid=2a21e0d08653f1bdf855fccb029e29f0

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5442007&units=metric&appid=2a21e0d08653f1bdf855fccb029e29f0';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

//Obteniendo datos json

request.onload = function()
{
    const clima_json= request.response;
    console.log(clima_json);
    document.getElementById('tem-act').innerHTML= clima_json['main'].temp;

    MostrarInformacion(clima_json);

}


function MostrarInformacion(objJson)
{
    var header1 = document.querySelector('header');
    var myh1 = document.createElement('h1');
    var tema = document.createElement('h2');
    var min = document.createElement('h2');
    var max = document.createElement('h2');
    var hum = document.createElement('h2')

    myh1.textContent = objJson.name;
    tema.textContent = 'Temperatura Actual:' + objJson.main.temp;
    min.textContent = 'Temperatura Minima:' + objJson.main.temp_min;
    max.textContent = 'Temperatura Maxima:' + objJson.main.temp_max;
    hum.textContent = 'Humedad relativa al ambiente:' + objJson.main.humidity + '%';


    header1.appendChild(myh1);
    header1.appendChild(tema);
    header1.appendChild(min);
    header1.appendChild(max);
    header1.appendChild(hum);

}
