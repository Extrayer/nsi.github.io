
var buttonChangeStyle = document.getElementById("secretButton");

buttonChangeStyle.addEventListener("click", function(){

    var baliseLink = document.getElementById("linkcss");
    var etat = baliseLink.href.endsWith("css/style.css");
 
    if (etat == true) {
        baliseLink.setAttribute("href", "css/style2.css");
        buttonChangeStyle.textContent = "css/style2.css"
    } else {
        baliseLink.setAttribute("href", "css/style.css");
        buttonChangeStyle.textContent = "css/style.css"
    }
})
