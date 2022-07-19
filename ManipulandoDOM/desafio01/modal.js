const buttonAbrir = document.getElementById("openModal");
const escDiv = document.querySelector('.modal-wrapper');



buttonAbrir.addEventListener("click", retirarInvisible);
function retirarInvisible() {
    escDiv.classList.remove("invisible");
}

document.addEventListener('keydown', analisarTecla)
function analisarTecla(event) {
  if (event.key === 'Escape' && !escDiv.classList.contains('invisible')) {
    escDiv.classList.add("invisible");
  }
};
