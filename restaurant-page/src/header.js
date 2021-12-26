import slider from "./slider";

function ButtonNav() {
  const button = document.createElement("div");
  button.classList.add("btn-nav");

  return button;
}

function links() {
  const list = document.createElement("ul");
  const listOfNav = ["Home", "Recipes", "About", "News", "Contact"];
  for (let i = 0; i < 4; i++) {
    let listItem = document.createElement("li");
    let button = ButtonNav();

    button.innerHTML = listOfNav[i];
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  return list;
}

function logo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = "LOGO";
  return logo;
}

function nav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  nav.appendChild(logo());
  nav.appendChild(links());
  return nav;
}

function Header() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(nav());
  header.appendChild(slider());
  return header;
}

export default Header;
