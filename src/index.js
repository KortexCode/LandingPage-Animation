import { observer } from "./observer.js"; //no use
import jamImg from "./assets/guilty/jam.png";
import eddiImg from "./assets/guilty/eddi.png";
import pheleImg from "./assets/guilty/phele.png";
import anthenaImg from "./assets/kof/athena.png";
import leonaImg from "./assets/kof/leona.png";
import ralfImg from "./assets/kof/ralf.png";
import sakuraImg from "./assets/street/sakura.png";
import codyImg from "./assets/street/cody.png";
import ibukiImg from "./assets/street/Ibuki.png";
import "./styles/main.css";
import "./styles/desktop.css";

const node = (id) => document.querySelector(id); //Se define una notación más sencilla

//DOM elements
const navbarBtn = node("#navbar__btn");
const navbar_mobile_menu = document.getElementById("navbar_mobile-menu");
const loader = document.getElementById("loader");
const imgIcon = document.getElementsByClassName("footer__img");
const page = document.querySelector(".page");
const modal = node(".modal");
const btnCloseModal = node("#btn-close-modal");

//EVENTS
//Open mobile menu
navbarBtn.addEventListener("click", openMenu);

//Add transition event to the loader
loader.addEventListener("animationend", endAnimation);

//Open modal
const imgArray = [...imgIcon]; //Destructuring
imgArray.map((item) => {
  item.addEventListener("click", openModal);
});

//Close modal
btnCloseModal.addEventListener("click", closeModal);

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

function endAnimation() {
  // when loder's animation ends it will change properties of page and loader
  loader.classList.add("hidden");
  page.classList.add("visible");
  loader.removeEventListener("animationend", endAnimation);
}

function openModal(event) {
  const imgList = document.querySelectorAll(".cards__img");
  const topText = document.getElementById("modal-top-text");
  const list = [...imgList];
  if (event.target.id === "elfend-img") {
    list[0].src = jamImg;
    list[1].src = eddiImg;
    list[2].src = pheleImg;
    list[0].alt = "Jam Kuradoberi character";
    list[1].alt = "./Eddi character";
    list[2].alt = "Ranlethal character";
    topText.textContent = "GUILTY GEAR REVELATOR";
  } else if (event.target.id === "iori-img") {
    list[0].src = anthenaImg;
    list[1].src = leonaImg;
    list[2].src = ralfImg;
    list[0].alt = "Athena character";
    list[1].alt = "Leona character";
    list[2].alt = "Ralf character";
    topText.textContent = "THE KING OF FIGHTERS XII";
  } else {
    list[0].src = sakuraImg;
    list[1].src = codyImg;
    list[2].src = ibukiImg;
    list[0].alt = "Sakura character";
    list[1].alt = "Cody character";
    list[2].alt = "Ibuki character";
    topText.textContent = "STREET FIGHTER IV";
  }
  modal.classList.add("modal-visible");
}

function closeModal() {
  modal.classList.remove("modal-visible");
}
