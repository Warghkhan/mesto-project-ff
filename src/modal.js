export {openModal, closeModal}
/*
const modalWindow = document.querySelector(".popup");
*/
function openModal(modalWindow) {
  modalWindow.style.display = "flex";
}

function closeModal(modalWindow) {
  modalWindow.style.display = "none";
}
