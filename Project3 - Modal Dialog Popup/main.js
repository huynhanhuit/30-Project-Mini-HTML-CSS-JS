var modal = document.querySelector(".modal");
var btnClick = document.querySelector(".button");
var btnClose = document.querySelector(".modal-footer > button");
var iconExit = document.querySelector(".fa-solid");

btnClick.onclick = function () {
  modal.classList.remove("hide");
};

btnClose.onclick = function () {
  modal.classList.add("hide");
};

iconExit.onclick = function () {
  modal.classList.add("hide");
};
