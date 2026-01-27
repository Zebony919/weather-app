import "./style.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

console.log("Hello, World!");

loadHomePage();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    loadHomePage();
})

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    loadMenuPage();
})

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
    loadAboutPage();
})
