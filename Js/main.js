let navbar = document.getElementById('nav-l')

let navtoggle = document.getElementById('nav-t')

navtoggle.addEventListener('click', () =>{
    

    navbar.classList.toggle('active');
    navbar.style.transition ="transition 0.5 linear";

})




