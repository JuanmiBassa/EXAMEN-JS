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
    
}

function netejaEx1() {
    
}

// Exercici 2: Arrays
function generaRandomArray() {
    
}

function netejaEx2() {
    
}

// Exercici 3: Estils CSS
function canviaEstil() {
    
}

function netejaEstil() {
    
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

function pintaDadesJSON(data){
    
}

function netejaLlista(){
   
}