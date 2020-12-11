let popup = document.querySelector('.popup');

popup.addEventListener("click", function (e) {
  clickOutsidePopup(e);
});

document.querySelector('.btn').addEventListener("click", function () {
  popup.classList.remove('hidden');
}
);

document.querySelector('.paper__close').addEventListener("click", function () {
  closePopup();
});

function closePopup() {
  popup.classList.add("hidden");
}

function clickOutsidePopup(e) {
  if (e.target.classList.contains("popup")) {
    closePopup();
  }
}