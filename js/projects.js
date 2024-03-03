'use strict'

var buttton = document.querySelector(".butt");
var parraf = document.querySelector(".cabraca");
var parraf1 = document.querySelector(".h_cabraca");
var parraf2 = document.querySelector(".animal");
var parraf3 = document.querySelector(".videog");
var parraf4 = document.querySelector(".suplementos");
var parraf5 = document.querySelector(".calculadora")
var navv = document.querySelector("#navv");

//style of projects 



parraf.style.padding = "2px 12px";
parraf.style.color = "white";
parraf.style.background="black";
parraf.innerHTML = "Cabraca Technology";

parraf1.style.color="white";
parraf1.style.background="black";
parraf1.style.padding="2px 40px";
parraf1.innerHTML = "History Cabraca";

parraf2.style.color="white";
parraf2.style.background="black";
parraf2.style.padding="2px 45px";
parraf2.innerHTML = "Animal Shelter";

parraf3.style.color="white";
parraf3.style.background="black";
parraf3.style.padding="2px 40px";
parraf3.innerHTML = "Video games Store";

parraf4.style.color="white";
parraf4.style.background="black";
parraf4.style.padding="2px 40px";
parraf4.innerHTML = "Supplements store";

parraf5.style.color="white";
parraf5.style.background="black";
parraf5.style.padding="2px 40px";
parraf5.innerHTML = "Calculadora";

navv.style.color="grey";


function entrarAlaImagen(){
    parraf.style.color="green";
    alert('Seleccionaste a Cabraca Technology ');
    
};

function entrarAlaImagen2(){
    parraf1.style.color="yellow";
    alert('Seleccionaste a History Cabraca');
}

function entrarAlaImagen3(){
    parraf2.style.color="orange";
    alert('Seleccionaste a Animal Shelter');
}

function entrarAlaImagen4(){
    parraf3.style.color="red";
    alert('Seleccionaste la imagen de video Games Store');
}

function entrarAlaImagen5(){
    parraf4.style.color="blue";
    alert('Seleccionaste la imagen de Approvingfit');
}
function entrarAlaImagen6(){
    parraf5.style.color="#e5a00d";
    alert('Seleccionaste la imagen de Calculadora');
}


parraf.addEventListener("mouseout", event =>{
    event.target.style.color="white";
});
parraf1.addEventListener("mouseout", event => {
    event.target.style.color="white";
});
parraf2.addEventListener("mouseout", event => {
    event.target.style.color="white";
});
parraf3.addEventListener("mouseout", event => {
    event.target.style.color="white";
});
parraf4.addEventListener("mouseout", event => {
    event.target.style.color="white";
});
parraf5.addEventListener("mouseout", event => {
    event.target.style.color="white";
});
