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

function pictures() {
  const pictures = document.createElement("div");
  pictures.classList.add("special-pictures");
  const picturesList = document.createElement("ul");
  let picturesArray = [];
  for (let i = 0; i < 3; i++) {
    const picture = document.createElement("div");
    picture.classList.add("special-pic");
    picture.classList.add("spic" + (i + 1));
    picturesArray.push(picture);
    const li = document.createElement("li");
    li.appendChild(picture);
    picturesList.appendChild(li);
  }

  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  h1.innerHTML = "$12.59";
  p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  picturesArray[0].appendChild(h1);
  picturesArray[0].appendChild(p);

  h1.innerHTML = "$12.59";
  p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  picturesArray[1].appendChild(h1);
  picturesArray[1].appendChild(p);

  h1.innerHTML = "$12.59";
  p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  picturesArray[2].appendChild(h1);
  picturesArray[2].appendChild(p);
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
