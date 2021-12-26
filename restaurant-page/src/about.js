import about1 from "./about1.jpg";
import about2 from "./about2.jpg";
import about3 from "./about3.jpg";

function text() {
  const text = document.createElement("div");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerHTML = "Best & Good";
  p.innerHTML =
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.";

  text.appendChild(hr);
  text.appendChild(h1);
  text.appendChild(p);

  text.classList.add("about-text");

  return text;
}

function pictures() {
  const pictures = document.createElement("div");
  pictures.classList.add("pictures");

  const pic1 = new Image();
  const pic2 = new Image();
  const pic3 = new Image();

  pic1.src = about1;
  pic2.src = about2;
  pic3.src = about3;

  pictures.appendChild(pic1);
  pictures.appendChild(pic2);
  pictures.appendChild(pic3);
  return pictures;
}

function About() {
  const about = document.createElement("div");
  about.classList.add("about");
  about.appendChild(text());
  about.appendChild(pictures());

  return about;
}

export default About;
