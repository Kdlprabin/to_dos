import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/get").then((response) => console.log(response));
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
