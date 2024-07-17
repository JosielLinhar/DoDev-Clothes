const btnAsc = document.getElementById("asc");
const btnDesc = document.getElementById("desc");
const inputQtd = document.getElementById("quantity");
const imgs = document.getElementsByClassName("group");
const mainImg = document.querySelector(".mainImg");
const firstImg = document.querySelector(".firstImg");
const secondImg = document.querySelector(".secondImg");
const thirdImg = document.querySelector(".thirdImg");

const list = [mainImg, firstImg, secondImg, thirdImg];

btnAsc.addEventListener("click", adcQtd);
btnDesc.addEventListener("click", remQtd);
imgs[1].addEventListener("click", fFocus);
imgs[2].addEventListener("click", sFocus);
imgs[3].addEventListener("click", tFocus);

function adcQtd() {
  if (inputQtd.value >= 0) inputQtd.value++;
}

function remQtd() {
  if (inputQtd.value > 0) inputQtd.value--;
}

function fFocus() {
  let firstUrl = getComputedStyle(firstImg).getPropertyValue("--firstUrl");
  let mainUrl = getComputedStyle(mainImg).getPropertyValue("--mainUrl");

  document.body.style.setProperty("--mainUrl", firstUrl);
  document.body.style.setProperty("--firstUrl", mainUrl);
}

function sFocus() {
  let secondUrl = getComputedStyle(firstImg).getPropertyValue("--secondUrl");
  let mainUrl = getComputedStyle(mainImg).getPropertyValue("--mainUrl");

  document.body.style.setProperty("--mainUrl", secondUrl);
  document.body.style.setProperty("--secondUrl", mainUrl);
}

function tFocus() {
  let thirdUrl = getComputedStyle(firstImg).getPropertyValue("--thirdUrl");
  let mainUrl = getComputedStyle(mainImg).getPropertyValue("--mainUrl");

  document.body.style.setProperty("--mainUrl", thirdUrl);
  document.body.style.setProperty("--thirdUrl", mainUrl);
}
