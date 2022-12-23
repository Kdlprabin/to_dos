import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => setData(response.data));
  }, []);
  return (
    <div className="display-card">
      {data.map((item) => (
        <div key={item.id} id="todo-item">
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default Card;
