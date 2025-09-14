//var seccion1 = document.querySelector(".seccion1");
var foto = document.querySelector(".foto");
// var name1 = document.querySelector(".nameinitial");
var boton = document.querySelector("#botonnn");
var boton2 = document.querySelector(".boton");

/*name1.innerHTML = "Richard Cabraca Venegas";
name1.style.color = "#e5a00d";
name1.style.position = "relative";
name1.style.paddingLeft = "600px";
name1.style.paddingTop= "10%"; */

//Estilos de la parte del index.html

//    name1.style.cssText=`color:#e5a00d;
//                         position: relative;
//                         padding-left:41%;
//                         padding-top:50px;

// `;
foto.style.cssText = `
                        padding: 0;
                        margin-left: 550px;
                        width: 180px;
                        margin-top: 280px;
                        border-bottom-left-radius: 200px;
                        border-top-right-radius: 200px;
                        border-bottom-right-radius: 200px;
                        border-top-left-radius: 200px;
                        margin-bottom: 0px;
`;

//     seccion1.style.cssText=`
//                         background-image: url("/img/naturaleza.jpg");
//                         background-attachment: fixed;
//                         background-size: cover;
//                         width: 1500px;
//                         height: 820px;

// `;

//     boton2.style.cssText=`
//                         position: relative;
//                         margin-left: 49%;
//                         height: 55px;
//                         border-color: #e5a00d;
//                         font-family: Arial, Helvetica, sans-serif;
//                         text-decoration:none;
//                        outline-offset: 5px;

// `;

boton2.style.cssText = `
                        color: #daa32e;
                        text-decoration:none;
                        
`;

boton.style.cssText = `
        color: #daa32e;
        text-decoration:none;
        
       
`;

//Funcion para cambiar el color del boton de START
function cambiarColor(boton) {
  if (boton.type == "mouseover") {
    boton.currentTarget.style.color = "#00af86";
    boton.currentTarget.style.color = "#daa32e";
  }
} 


let lnk = document.getElementById("botonnn");
lnk.addEventListener("mouseover", cambiarColor);
lnk.addEventListener("mouseout", cambiarColor);

function mostrarAlerta(boton) {
  if (("click" === boton) === true) {
    location.href = "html/inicio.html";
  } else {
    alert("Bienvenido al portfolio de Richard Cabraca Venegas");
  }
}

//Funcion para abrir facebook
function abrirFace(facebook="https://www.facebook.com/profile.php?id=100076255117626") {
  if (confirm("¿Deseas ingresar al facebook?") == true) {
    window.open(facebook, "_blank");
  } else{
    alert("Detener enlace");
  }
}
//funcion para abrir github
function abrirGith(github= "https://github.com/Cabraca06"){
  if (confirm("¿Deseas ingresar a github ?") == true){
    window.open(github, "_blank");
  } else{
    alert("Detener enlace");
  }

}

//Funcion para abrir likedin
function abrirLink(linkedin="https://www.linkedin.com/in/richard-cabraca-venegas-3868491b3"){
  if (confirm ("¿Deseas ingresar a Linkedin ?") == true){
    window.open(linkedin, "_blank");
  } else{
    alert ("Detener enlace");
  }
}

//Funcion para abrir Tik Tok
function abrirTikT(tiktok="https://www.tiktok.com/@mr_cabraca_code"){
  if (confirm ("¿Deseas ingresar a Tik Tok ?") == true){
    window.open(tiktok, "_blank");
  } else{
    alert ("Detener enlace");
  }
}





let lnk2 = document.getElementById("botonnn");
lnk2.addEventListener("click", mostrarAlerta);




