const btn = document.getElementById("btn-mobile");
const menuNavigation = document.querySelector(".navigation");

btn.addEventListener("click", (event) => {
  menuNavigation.classList.toggle("active");
  addBodyHidden(menuNavigation);
});

function addBodyHidden(menu) {
  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.removeProperty("overflow");
  }
}

const itensMenu = document.querySelectorAll(".navigation ul li a");

itensMenu.forEach((element) => {
  element.addEventListener("click", () => {
    menuNavigation.classList.remove("active");
    document.body.style.removeProperty("overflow");
  });
});
