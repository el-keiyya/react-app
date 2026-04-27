import "./App.css";

function Greeting({ name, age }) {
  return (
    <h1>
      Hello, I am {name}, I am {age} years old!
    </h1>
  );
}

function App() {
  const showGreeting = false;

  return (
    <>
      <div>
        {showGreeting ? (
          <Greeting name={"Hassan"} age={29} />
        ) : (
          <button>Click me</button>
        )}
      </div>
    </>
  );
}

//COMPONENT = Function that returns JSX

export default App;
