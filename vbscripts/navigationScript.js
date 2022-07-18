let menuIcon = document.getElementById("hambuger-menu");
let navBar = document.getElementById("nav-bar");
let menuList = document.querySelector(".nav-link");
let main = document.querySelector("main");
let header = document.querySelector("header");
let email = document.getElementById("nav-mail");

menuIcon.addEventListener("click", () => {
  if (menuList.style.display === "none") {
    email.style.display = "none";
    menuList.style.display = "flex";
    menuList.style.flexDirection = "column";
    menuList.style.height = "100vh";
    menuList.style.width = "95vw";

    menuList.style.color = "#fff";
    menuList.style.fontSize = "32px";
    menuList.style.order = -2;
    menuList.style.marginTop = "20px";

    menuIcon.style.opacity = 0;
    header.style.position = "absolute";
    header.style.height = "100vh";
    header.style.zIndex = "1";
  } else {
    menuList.style.display = "none";
  }
});
