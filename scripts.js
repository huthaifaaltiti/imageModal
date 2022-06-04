const smallImg = document.querySelector(".img-container img");
const fullImg = document.querySelector(".full-img");
const modal = document.querySelector(".modal");
const iconClose = document.querySelector(".icon-close");

// Events Listener

smallImg.addEventListener("click", function () {
  modal.classList.add("open");

  const imgHighQualitySellector = smallImg.getAttribute("alt");
  fullImg.src = `/images/bg/${imgHighQualitySellector}.jpg`;
  fullImg.classList.add("open");
});

iconClose.addEventListener("click", function () {
  modal.classList.remove("open");
});

modal.addEventListener("click", function (e) {
  console.log(e);
  // console.log(e.target.classList.contains('modal'));

  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  }
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // console.log(modal.classList.contains("open"));

  if (e.key === `Escape` && modal.classList.contains("open")) {
    modal.classList.remove("open");
  }
});


