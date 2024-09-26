export { openModal, closeModal };

function openModal(modalWindow) {
  modalWindow.classList.remove("popup_is-animated");
  modalWindow.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
  modalWindow.addEventListener("click", closeModalByOverlayAndCrossButton);
}

function closeModal(modalWindow) {
  modalWindow.classList.remove("popup_is-opened");
  modalWindow.classList.add("popup_is-animated");
  document.removeEventListener("keydown", closePopupByEsc);
  modalWindow.removeEventListener("click", closeModalByOverlayAndCrossButton);
}

function closePopupByEsc(e) {
  if (e.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

function closeModalByOverlayAndCrossButton(e) {
  if (
    e.target.classList.contains("popup_is-opened") ||
    e.target.classList.contains("popup__close")
  ) {
    closeModal(e.currentTarget);
  }
}
