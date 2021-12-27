import special1 from "./special1.jpg";
import special2 from "./special2.jpg";
import special3 from "./special3.jpg";

function text() {
  const text = document.createElement("div");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");

  h1.innerHTML = "Best & Good";

  text.appendChild(hr);
  text.appendChild(h1);

  text.classList.add("special-text");

  return text;
}

function picture() {}

function pictures() {
  const pictures = document.createElement("div");
  pictures.classList.add("special-pictures");
  const picturesList = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    const picture = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.innerHTML = "$12.59";
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    picture.classList.add("special-pic");
    picture.classList.add("spic" + (i + 1));
    picture.appendChild(h1);
    picture.appendChild(p);
    const li = document.createElement("li");
    li.appendChild(picture);
    picturesList.appendChild(li);
  }

  pictures.appendChild(picturesList);
  return pictures;
}

function Special() {
  const special = document.createElement("div");
  special.classList.add("special");

  special.appendChild(text());
  special.appendChild(pictures());

  return special;
}

export default Special;
