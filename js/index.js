var seccion1 = document.querySelector(".seccion1");
var foto = document.querySelector(".foto");
// var name1 = document.querySelector(".nameinitial");
var boton = document.querySelector("#botonnn")
var boton2 = document.querySelector(".boton")


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


    
    foto.style.cssText=`
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
//                         outline-offset: 5px;
                        



// `;

    boton.style.cssText=`
                        color: #ffbb00;
                        text-decoration:none;
`;


//cambia de color el nombre de RICHARD CABRACA PORTFOLIO con el click a start y envia alerta que cambia de pagina

function cambiaColor(){
    name1.style.color="green"
    alert('Inicia la aventura de conocer a Richard Cabraca');

}