window.sr = ScrollReveal();

sr.reveal('.logo1', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'

});

sr.reveal('.menu',  {
    duration: 1200,
    origin: 'bottom',
    distance: '-100px'

});
sr.reveal('.main-menu',  {
    duration: 1200,
    origin: 'bottom',
    distance: '-100px'

});
sr.reveal('.Ala1',  {
    duration: 1200,
    origin: 'right',
    distance: '-100px'

});
sr.reveal('.Ala2',  {
    duration: 1200,
    origin: 'left',
    distance: '-100px'

});
sr.reveal('.fondo',  {
    duration: 3000,
});
sr.reveal('.skills',  {
    duration: 1500,
    origin: 'top',
    distance: '-100px'
});




const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const trabajo = document.querySelector("#trabajo1");
const acerca = document.querySelector("#acerca");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
trabajo.addEventListener("click", () => {
    nav.classList.remove("visible");
})
acerca.addEventListener("click", () => {
    nav.classList.remove("visible");
})

