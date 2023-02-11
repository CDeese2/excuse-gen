/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomPicker() {
  let who = ["The dog", "My grandma", "His turtle", "My bird", "Your uncle"];
  let action = ["ate", "peed", "crushed", "broke", "smashed"];
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

  let quien = who[Math.round(Math.random() * (who.length - 1))];
  let accion = action[Math.round(Math.random() * (action.length - 1))];
  let que = what[Math.round(Math.random() * (what.length - 1))];
  let cuando = when[Math.round(Math.random() * (when.length - 1))];
  let result;
  return result;
}

window.onload = function() {
  //write your code here
  let final_result = quien + " " + accion + " " + que + " " + cuando;
  console.log("Hello Rigo from the console!");
};
