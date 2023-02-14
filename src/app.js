/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird", "Your uncle"];
  let action = ["ate", "peed on", "crushed", "broke", "smashed", "julienned"];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my shirt",
    "your computer"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "after the game"
  ];

  let quien = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);
  let result;
  return (
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]
  );
}
window.onload = function() {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = excuseGenerator();
};
