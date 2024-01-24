//DOM elements
const navbarBtn = document.getElementById("navbar__btn");
const navbar_mobile_menu = document.getElementById("navbar_mobile-menu");
const loader = document.getElementById("loader");
const imgIcon = document.getElementsByClassName("footer__img");
console.log(imgIcon);

//Events
navbarBtn.addEventListener("click", openMenu);

const x = [...imgIcon];
console.log(x);
x.map((item) => {
  item.addEventListener("click", openModal);
});

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

function openModal(event) {
  console.log("clikeado", event);
}
