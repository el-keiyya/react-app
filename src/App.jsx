import "./App.css";

function Greeting() {
  return <h1>Hello, I am Haasan!</h1>;
}

function App() {
  const name = getName();
  const age = 29;

  return (
    <>
      <div>
        <Greeting />
      </div>
    </>
  );
}

function getName() {
  return "Hassan";
}

//COMPONENT = Function that returns JSX

export default App;
