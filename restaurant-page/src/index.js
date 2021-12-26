import Home from "./home";
import Header from "./header";
import "./style.css";

function Restaurant() {
  const body = document.getElementsByTagName("body")[0];

  body.appendChild(Header());
}

Restaurant();

console.log("Hello World!");
