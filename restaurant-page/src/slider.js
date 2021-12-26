function arrow() {
  const arrow = document.createElement("div");
  arrow.classList.add("arrow");
  arrow.innerHTML = "123";
  arrow.addEventListener("click", () => {
    const header = document.getElementsByClassName("header")[0];
    header.style.backgroundImage =
      "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
  });

  return arrow;
}

function button() {
  const button = document.createElement("div");
  button.classList.add("btn-slider");
  button.innerHTML = "GET STARTED";
  return button;
}

function dots() {
  const dots = document.createElement("ul");
  const dot = document.createElement("span");
  dot.classList.add("dot");
  for (let i = 0; i < 2; i++) {
    let dotItem = document.createElement("li");
    dotItem.append(dot);
    dots.appendChild(dotItem);
  }

  dots.classList.add("dots");
  return dots;
}

function sliderText() {
  const sliderText = document.createElement("div");
  sliderText.classList.add("slider-text");
  const text = document.createElement("h1");
  text.innerHTML = "Eat, Drinks at <br/> Carolina";
  sliderText.appendChild(text);
  sliderText.appendChild(button());

  return sliderText;
}

function slider() {
  const slider = document.createElement("div");
  slider.classList.add("slider");

  slider.appendChild(arrow());
  slider.appendChild(sliderText());
  slider.appendChild(arrow());

  return slider;
}

export default slider;
