import "./App.css";

function Greeting({ name, age }) {
  return (
    <h1>
      Hello, I am {name}, I am {age} years old!
    </h1>
  );
}

function App() {
  const name = "Hassan";
  const age = 29;

  return (
    <>
      <div>
        <Greeting name={"Hassan"} age={29} />
        <Greeting name={"Pedro"} />
        <Greeting name={"Jack"} />
        <Greeting name={"Jessica"} />
        <Greeting name={"Bane"} />
      </div>
    </>
  );
}

//COMPONENT = Function that returns JSX

export default App;
