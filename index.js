const $hamburguer = document.getElementById(
  "hamburguer-icon"
);
const $menu = document.getElementById("menu-movil");

const mostrarmenu = () => {
  $menu.classList.toggle("menu-visible");
};

$hamburguer.addEventListener("click", mostrarmenu);
