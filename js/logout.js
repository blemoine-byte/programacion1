let logoutLink = document.getElementById("logout-link");


if (logoutLink){
    logoutLink.addEventListener("click", function(event){
        event.preventDefault();
        localStorage.removeItem("email");
        location.href = "./login.html";
    });
}
