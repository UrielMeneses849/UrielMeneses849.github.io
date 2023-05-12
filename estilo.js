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
sr.reveal('.nombre',  {
    duration: 2000,
});
sr.reveal('.fondo',  {
    duration: 3000,
});
sr.reveal('.skills',  {
    duration: 1500,
    origin: 'top',
    distance: '-100px'
});

    window.addEventListener('scroll',function(){

        let animacion = document.getElementById('1');
        let posicion = animacion.getBoundingClientRect().top;
        let tamañopantalla = window.innerHeight / 1.2;
    
        if(posicion < tamañopantalla){
            animacion.style.animation = 'mover 1.6s ease-out';
        }
    })

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
trabajo.addEventListener("click", () => {
    nav.classList.remove("visible");
})


var botonMenu = document.getElementById("abrir");
var botonCerrar = document.getElementById("cerrar");
var present2 = document.getElementById("present2");
var present = document.getElementById("present");
var ala1 = document.getElementById("ala1");
var ala2 = document.getElementById("ala2");
var habilidades = document.getElementById("habilidades");
var trabajo1 = document.getElementById("trabajo1");
var titu = document.getElementById("titu");

function ocultar(){
habilidades.style.visibility="hidden";
present.style.visibility = "hidden";
present2.style.visibility = "hidden";
ala1.style.visibility="hidden";
ala2.style.visibility="hidden";
titu.style.visibility="hidden";

}
function mostrar(){
    present.style.visibility = "visible";
    present2.style.visibility = "visible";   
    ala1.style.visibility="visible";
    ala2.style.visibility="visible"; 
    habilidades.style.visibility="visible";
    titu.style.visibility="visible";
}

trabajo1.onclick = mostrar;
botonMenu.onclick = ocultar;
botonCerrar.onclick = mostrar;
