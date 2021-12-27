function text() {
  const text = document.createElement("div");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");

  h1.innerHTML = "Best & Good";

  text.appendChild(hr);
  text.appendChild(h1);

  text.classList.add("menu-text");

  return text;
}

function items() {
  const items = document.createElement("div");
  items.classList.add("menu-items");
  const itemNames = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  const itemTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam...",
  ];

  const itemPrices = [
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
    "$16.00",
  ];

  let flag = true;

  for (let i = 1; i < 17; i++) {
    //1 3 6 8 9 11 14 16
    const item = document.createElement("div");
    item.classList.add("menu-item");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");

    h1.innerHTML = itemNames[i];
    p.innerHTML = itemTexts[i];
    h2.innerHTML = itemPrices[i];

    item.appendChild(h1);
    item.appendChild(p);
    item.appendChild(h2);

    items.appendChild(item);
  }

  return items;
}

function Menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(text());
  menu.appendChild(items());

  return menu;
}

export default Menu;
