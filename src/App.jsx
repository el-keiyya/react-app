import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <div>
      <input type="text" placeholder="Name..." onChange={handleChange} />
      {name}
    </div>
  );
}

//COMPONENT = Function that returns JSX

export default App;
