// Inputs:
const inputTime1 = document.querySelector("#inputTime1");
const inputTime2 = document.querySelector("#inputTime2");

// Resultats:
const resultatTime = document.querySelector("#resultatTime");
const resultatArray = document.querySelector("#resultatArray");
const principal = document.querySelector("#principal");
const resultatJSON = document.querySelector("#resultatJSON");

// Botons:
const btnCalculaHora = document.querySelector("#calculaHora");
const btnNetejaEx1 = document.querySelector("#netejaEx1");
const btnGeneraArray = document.querySelector("#generaArray");
const btnNetejaEx2 = document.querySelector("#netejaEx2");
const btnCanviaEstil = document.querySelector("#canviaEstil");
const btnNetejaEstil = document.querySelector("#netejaEstil");
const btnCarregaJSON = document.querySelector("#carregaJSON");
const btnNetejaLlista = document.querySelector("#netejaLlista");

//Events:
btnCalculaHora.onclick = calculaHora;
btnNetejaEx1.onclick = netejaEx1;
btnGeneraArray.onclick = generaRandomArray;
btnNetejaEx2.onclick = netejaEx2;
btnCanviaEstil.onclick = canviaEstil;
btnNetejaEstil.onclick = netejaEstil;
btnCarregaJSON.onclick = carregaJSON;
btnNetejaLlista.onclick = netejaLlista;

//Exercici 1: suma d'hores
function calculaHora() {
    var horaDividida1 = inputTime1.value.split(':');
    var horaDividida2 = inputTime2.value.split(':');
    if (horaDividida1[0] == "" || horaDividida1[1] == "" || horaDividida2[0] == "" || horaDividida2[1] == "") {
        resultatTime.innerHTML = `Faltan valores.`;
        resultatTime.style.color = "red";
    } else {
        var horas = parseInt(horaDividida1[0]) + parseInt(horaDividida2[0]);
        var minutos = parseInt(horaDividida1[1]) + parseInt(horaDividida2[1]);
        if (minutos > 59) {
            minutos = minutos % 60;
            horas += 1;
        }
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (horas < 10) {
            horas = "0" + horas;
        }
        resultatTime.innerHTML = `${horas}:${minutos}`;
    }
}

function netejaEx1() {
    resultatTime.innerHTML = "";
}

// Exercici 2: Arrays
function generaRandomArray() {
    var numeros = [];
    var NumMayor = 0;
    var posición;
    for (let i = 0; i < 10; i++) {
        var numeroAleatorio = Math.floor(Math.random() * (1, 100));
        numeros[i] = numeroAleatorio;
        if (NumMayor < numeros[i]) {
            NumMayor = numeros[i];
            posición = i + 1;
        }
    }
    resultatArray.innerHTML = `Array: ${numeros} | Max: ${NumMayor} | Posición: ${posición}`;
}

function netejaEx2() {
    resultatArray.innerHTML = "";
}

// Exercici 3: Estils CSS
function canviaEstil() {
    var RGB = [random(), random(), random()];
    var RGBordes = [];
    for (var i = 0; i < RGB.length; i++) {
        RGBordes.push(255 - RGB[i]);
    }
    var colorFondo = `rgb(${RGB[0]},${RGB[1]},${RGB[2]})`;
    var colorBorde = `rgb(${RGBordes[0]},${RGBordes[1]},${RGBordes[2]})`;
    if (RGB[0] < 30 && RGB[1] < 30 && RGB[2] < 30) {
        principal.style.color = "white";
    } else {
        principal.style.color = "black";
    }

    principal.style.backgroundColor = colorFondo;
    principal.style.borderColor = colorBorde;
}

function netejaEstil() {
    principal.style.backgroundColor = "white";
    principal.style.borderColor = "black";
}

// Exercici 4: JSON
function carregaJSON() {
    fetch("./peliculas.json")
        .then(response => {
            if (response.ok) return response.json();
            else {
                alert("No s'ha pogut completar la càrrega. Error " + response.status)
            }
        })
        .then(data => {
            pintaDadesJSON(data);
        });
}

function pintaDadesJSON(data) {
    var htmlAPintar = "";
    htmlAPintar+= "<ol>";
    data.peliculas.forEach(contenido => {
        if (contenido.año < 2000) {
            htmlAPintar+= `<li>${contenido.titulo} (${contenido.año})<ul>`;
            contenido.actores.forEach(element => {
                htmlAPintar += `<li>${element}</li>`;
            });
            htmlAPintar += "</ul>";
        }
    });
    htmlAPintar += "</ol>";
    resultatJSON.innerHTML = htmlAPintar;
}

function netejaLlista() {
    resultatJSON.innerHTML = "";
}


/* MIS FUNCIONES */
function random() {
    return Math.round(Math.random() * 256);
}