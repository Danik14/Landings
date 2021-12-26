import BriefPic from "./brief.jpg";

function info() {
  const info = document.createElement("div");
  info.classList.add("info");
  const hr = document.createElement("hr");
  const h1 = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  h1.innerHTML = "The Restaurant";
  p1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut enim quam laboriosam illum amet.";
  p2.innerHTML =
    "Obcaecati nisi ipsum possimus necessitatibus tempore, illo id facere magni quisquam quam quaerat accusamus dolores?";
  info.appendChild(hr);
  info.appendChild(h1);
  info.appendChild(p1);
  info.appendChild(p2);
  return info;
}

function Brief() {
  const brief = document.createElement("div");
  const pic = new Image();
  pic.src = BriefPic;
  brief.classList.add("brief");
  brief.appendChild(pic);
  brief.appendChild(info());
  return brief;
}

export default Brief;
