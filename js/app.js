const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");

toggleMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("show");
});