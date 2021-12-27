import Special from "./special";
import Header from "./header";
import Brief from "./brief";
import About from "./about";
import "./style.css";

function Restaurant() {
  const body = document.getElementsByTagName("body")[0];

  body.appendChild(Header());
  body.appendChild(Brief());
  body.appendChild(About());
  body.append(Special());
}

Restaurant();

console.log("Hello World!");
