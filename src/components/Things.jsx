import React, { useState } from "react";
import axios from "axios";

function Things() {
  const [items, setItems] = useState([]);

  function fetchRandomData() {
    console.log("asodsb");
    axios
      .get("https://randomuser.me/api/")
      .then(response => {
        setItems(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <button onClick={fetchRandomData}>Fetch Random Data</button>
      <div>
        {items && items.map(item => (
          <>
            <img src={item.picture.thumbnail} alt=''/>
            <p>First Name: {item.name.first}</p>
            <p>Last Name: {item.name.last}</p>
            <p>Phone: {item.cell}</p>
          </>
        ))}
      </div>
    </div>
  );
}
export default Things;