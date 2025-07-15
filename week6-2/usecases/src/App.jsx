// import { useState, useEffect } from "react";

// function App() {
//   const [selectId, setSelectId] = useState(1);

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setSelectId(1);
//         }}
//       >
//         1
//       </button>

//       <button
//         onClick={function () {
//           setSelectId(2);
//         }}
//       >
//         2
//       </button>

//       <button
//         onClick={function () {
//           setSelectId(3);
//         }}
//       >
//         3
//       </button>

//       <button
//         onClick={function () {
//           setSelectId(4);
//         }}
//       >
//         4
//       </button>
//       <Todo id={selectId}></Todo>
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`https://dummyjson.com/todos/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // DummyJSON uses `todo` as a string, no title/description
//         // We'll simulate a title and description for display
//         setTodo({
//           title: `Task #${data.id}`,
//           description: data.todo,
//         });
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;
///////////////////////////////////////////////////////////////////
//////////////////useMemo/////////////////////

import { useEffect, useMemo, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputvalue] = useState(1);
  // const [count, setCount] = useState(0);

  let count = useMemo(() => {
    let finalcount = 0;
    for (let i = 1; i <= inputvalue; i++) {
      finalcount = finalcount + 1;
    }
    return finalcount;
  }, [inputvalue]);

  // useEffect(() => {
  //   let finalcount = 0;
  //   for (let i = 1; i <= inputvalue; i++) {
  //     finalcount = finalcount + i;
  //   }
  //   return finalcount;
  // }, [inputvalue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputvalue(e.target.value);
        }}
        placeholder={"find sum from 1 to n"}
      ></input>
      <br></br>
      sum of {inputvalue} is {count}
      <br></br>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        click me ({counter})
      </button>
    </div>
  );
}
export default App;
