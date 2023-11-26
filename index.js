//DOM elements
const navbarBtn = document.getElementById("navbar__btn");
const navbar_mobile_menu = document.getElementById("navbar_mobile-menu");

//Events
navbarBtn.addEventListener("click", openMenu);

//Functions
function openMenu() {
  //Add or remove the class  "open-menu" to close or open the mobile menu.
  const open = navbar_mobile_menu.classList.contains("open-menu");
  if (open) {
    navbar_mobile_menu.classList.remove("open-menu");
  } else {
    navbar_mobile_menu.classList.add("open-menu");
  }
}
