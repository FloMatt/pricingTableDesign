let active = false;
function toggle() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector(".text");
  let text1 = document.querySelector(".text1");
  let periods = document.querySelectorAll(".period");

  active = !active;
  if (active) {
    toggle.classList.add("active");
    text.innerHTML = "€ 140";
    text1.innerHTML = "€ 450";

    periods.forEach(function (e) {
      e.textContent = "Per Year";
    });
  } else {
    toggle.classList.remove("active");
    text.innerHTML = "€ 12.99";
    text1.innerHTML = "€ 39.99";
    periods.forEach(function (e) {
      e.textContent = "Per Month";
    });
  }
}
