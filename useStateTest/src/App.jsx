import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  const addNew = () => {
    if (inputText !== "") {
      setList([...list, inputText]);
      setInputText("");
    }
  };
  const deleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);

    // const updatedList = list.filter((_, i) => index !== i);
    // setList(updatedList);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addNew}>ADD</button>
      <ol>
        {list.map((item) => {
          return (
            <li>
              {item}
              <button onClick={() => deleteItem(item)}>&times;</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [list, setList] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const addNew = () => {
//     if (inputText !== "") {
//       setList([...list, inputText]);
//       setInputText("");
//     }
//   };

//   const deleteItem = (index) => {
//     const updatedList = [...list];
//     updatedList.splice(index, 1);
//     setList(updatedList);

//     // const updatedList = list.filter((_, i) => i !== index);
//     // setList(updatedList);
//   };

//   return (
//     <div>
//       <h1>Add ur lists</h1>
//       <input
//         type="text"
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//       />
//       <button onClick={addNew}>Add</button>

//       <ol>
//         {list.map((list, index) => {
//           return (
//             <li key={index}>
//               {list}
//               <button onClick={() => deleteItem(index)}>&times;</button>
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// };

// export default App;
