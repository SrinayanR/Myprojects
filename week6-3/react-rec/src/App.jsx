import { useEffect, useState, useRef } from "react";

function App() {
  const [income, setIncome] = useState(1000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      {
        divRef.current.innerHTML = 10;
      }
    }, 5000);
  }, []);

  return (
    <div>
      the income tax is<div ref={divRef}>{income}</div>
    </div>
  );
}
export default App;
