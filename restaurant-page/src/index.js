import Special from "./special";
import Header from "./header";
import Brief from "./brief";
import About from "./about";
import Menu from "./menu";
import "./style.css";

function Restaurant() {
  const body = document.getElementsByTagName("body")[0];

  body.appendChild(Header());
  body.appendChild(Brief());
  body.appendChild(About());
  body.append(Special());
  body.appendChild(Menu());
}

Restaurant();

console.log("Hello World!");
