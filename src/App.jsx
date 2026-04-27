import "./App.css";

function Greeting(props) {
  return (
    <h1>
      Hello, I am {props.name}, I am {props.age} years old!
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
