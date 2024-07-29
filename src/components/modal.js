export { openModal, closeModal };

function openModal(modalWindow) {
  modalWindow.classList.remove("popup_is-animated");
  modalWindow.classList.add("popup_is-opened");
  const popupCloseButton = modalWindow.querySelector(".popup__close");
  popupCloseButton.addEventListener(
    "click",
    function () {
      closeModal(modalWindow);
    },
    { once: true }
  );

  modalWindow.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape") {
        closeModal(modalWindow);
        //console.log(e.key);
      }
    },
    { once: true }
  );

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape") {
        closeModal(modalWindow);
        //console.log(e.key);
      }
    },
    { once: true }
  );

  modalWindow.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("popup_is-opened")) {
        closeModal(modalWindow);
      }
    },
    { once: true }
  );
}

function closeModal(modalWindow) {
  modalWindow.classList.remove("popup_is-opened");
  modalWindow.classList.add("popup_is-animated");
}
