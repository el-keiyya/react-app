import "./App.css";

function App() {
  const name = getName();
  const age = 29;

  return (
    <>
      <div>
        <h1>
          Hello World, I am {name} and I'm {age} years old
        </h1>
      </div>
    </>
  );
}

function getName() {
  return "Hassan";
}

export default App;
