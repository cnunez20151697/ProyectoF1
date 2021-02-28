const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const menuHamburger = document.getElementById("hamburger");
let abieto = false;

alert("HOla")

const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}


window.addEventListener("click", function(){
    toggleMenu();
})

