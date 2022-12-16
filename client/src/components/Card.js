import React from "react";
import { useState } from "react";
import axios from "axios";
function Card() {
  var list = [];
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        var { title } = response.data[i];
        list.push(title);
      }
    });
  return <div className="display-card">{}</div>;
}

export default Card;
