const linkEleArr = document.querySelectorAll(".popup-link");
const realLink = document.getElementById("popup-link");
const popupCounter = document.getElementById("popup-counter");
const popup = document.getElementById("popup");
const popupCloseBtn = document.getElementById("popup-close");

function startCountdown(url) {
  let timeleft = 10;
  let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      realLink.href = url;
      realLink.style.display = "block";
    } else {
      popupCounter.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

function closePopup() {
  popup.classList.remove("show_popup");
  realLink.style.display = "none";
  popupCounter.innerHTML = 0;
  (function (w) {
    w = w || window;
    var i = w.setInterval(function () {}, 100000);
    while (i >= 0) {
      w.clearInterval(i--);
    }
  })(/*window*/);
}

linkEleArr.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    popup.classList.add("show_popup");
    startCountdown(ele.dataset.uri);
  });
});

popupCloseBtn.addEventListener("click", () => closePopup());
