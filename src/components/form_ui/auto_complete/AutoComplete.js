import React, { useState } from "react";

const AutoComplete = () => {
  const [data, setData] = useState(["chair", "food", "math", "yam"]);
  const [result, setResult] = useState([]);

  const searchAction = (val) => {
    setResult(data.filter((x) => x === val));
    console.log("searching");
  };

  const searchHandler = (e) => {
    // setTimeout(() => searchAction(e.target.value), 2000);
    searchAction(e.target.value);
  };

  return (
    <div>
      <div>["chair", "food", "math", "yam"]</div>
      <input type="text" onChange={searchHandler} />
      <ul>
        {result.map((x) => {
          return <li key={x}>{x}</li>;
        })}
      </ul>
    </div>
  );
};

export default AutoComplete;
