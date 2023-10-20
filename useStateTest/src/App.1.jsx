import React, { useState } from "react";

export const App = () => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  // const getInput = (e) => {
  //   setInputText(e.target.value);
  // };
  const addNew = () => {
    setList([...list, inputText]);
    console.log(list);
    setInputText("");
  };

  return (
    <div>
      <h1>Add ur lists</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addNew}>Add</button>
      {inputText}
      <ul>
        {list.map(item)}=>{}
        return <li>{item}</li>
        }}
      </ul>
    </div>
  );
};
