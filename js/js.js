// let button = document.querySelector(".menu-button")
// button.addEventListener("click", changeMenu)
// let layer = document.querySelector(".fade-layer")
// layer.addEventListener("click", changeMenu)

function changeMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("show")
    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}