let form=document.querySelector(".registro")
let emailinput=document.querySelector("#email")
let contrasenainput=document.querySelector("#contrasena")
let repetircontrasenainput=document.querySelector("#repetircontrasena")


form.addEventListener("submit",function(event){
event.preventDefault();



if (emailinput.value=="" ){
    alert ("El campo email es obligatorio");
    return;
}

if (contrasenainput.value==""){
    alert ("El campo contrasena es obligatorio");
    return;
}

if (contrasenainput.value.length<6){
    alert ("El campo contrasena es obligatorio");
    return;
};

if (contrasenainput!==repetircontrasenainput){
    alert ("Las contrasenas no coinciden");
    return;
}
localStorage.setItem("email", emailinput.value); 

location.href="./index.html";

})