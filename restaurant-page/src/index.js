import Home from "./home";
import Header from "./header";
import Brief from "./brief";
import About from "./about";
import "./style.css";

function Restaurant() {
  const body = document.getElementsByTagName("body")[0];

  body.appendChild(Header());
  body.appendChild(Brief());
  body.appendChild(About());
}

Restaurant();

console.log("Hello World!");
