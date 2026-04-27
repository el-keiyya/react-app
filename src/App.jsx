import { useState } from "react";
import "./App.css";

function Greeting({ name, age }) {
  return (
    <h1>
      Hello, I am {name}, I am {age} years old!
    </h1>
  );
}

function App() {
  const [showGreeting, setShowGreeting] = useState(false);

  function toggleGreeting() {
    // if (showGreeting) {
    //   setShowGreeting(false);
    // } else {
    //   setShowGreeting(true);
    // }

    setShowGreeting(!showGreeting);
  }

  return (
    <div>
      <button onClick={toggleGreeting}>Toggle Greeting</button>
      {showGreeting && <Greeting name={"Hassan"} age={29} />}
    </div>
  );
}

//COMPONENT = Function that returns JSX

export default App;
