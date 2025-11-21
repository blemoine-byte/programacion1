let emailguardado = localStorage.getItem("email");




let linklogin=document.querySelector(".link-login");
let mensaje=document.querySelector(".mensaje");
let logoutLink=document.getElementById("logout-link");
let saludoTitulo=document.querySelector(".saludo-titulo");


if (emailguardado){
 
  if(mensaje){
    mensaje.innerHTML="bienvenido, " + emailguardado +"-gracias por visitarnos";
}


    if(linklogin){
        linklogin.style.display="none";
    }


    if(logoutLink){
        logoutLink.style.display="inline";
    }




    if(logoutLink){
        logoutLink.addEventListener("click", function(event){
            event.preventDefault();
            localStorage.removeItem("email");
            location.href = "./login.html";
        });
    }
}
