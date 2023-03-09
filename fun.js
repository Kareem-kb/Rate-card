const firstCont = document.querySelector(".rate-continer");
const scoundCont = document.querySelector(".thankyou-continer");
const submitButton = document.querySelector(".submit-button");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rate-btn");

submitButton.addEventListener("click", () => {
  scoundCont.classList.remove("hidden");
  firstCont.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
    // console.log(rate.innerHTML);
  });
});
