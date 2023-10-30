import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const genreList = () => {
    return null;
  };

  return (
    <>
      <h1 className="text-blue-500">Vite + Reacttt</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {genreList()}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn moreeeee
      </p>
    </>
  );
}

export default App;
