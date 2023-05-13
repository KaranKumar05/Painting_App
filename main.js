let dropdownToggle = document.querySelector(".dropdown-toggle");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownButtons = document.querySelectorAll(".dropdown-menu button");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });
});
// Shapes button
let dropdownToggle_2 = document.querySelector(".dropdown-toggle-2");
let dropdownMenu_2 = document.querySelector(".dropdown-menu-2");
let dropdownButtons_2 = document.querySelectorAll(
  ".dropdown-menu-2 button"
);
dropdownToggle_2.addEventListener("click", () => {
  dropdownMenu_2.classList.toggle("show");
});
dropdownButtons_2.forEach((button) => {
  button.addEventListener("click", () => {
    dropdownMenu_2.classList.remove("show");
  });
});