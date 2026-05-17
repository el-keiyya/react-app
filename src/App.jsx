import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function Homepage() {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Home</h1>

      <p>You are not logged in. Go to the login page to sign in.</p>
    </div>
  );
}

function ProfilePage() {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Profile</h1>
      <p>Name: [name will go here]</p>
      <p>Here you could show more user info from the context.</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    alert("login");
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Type any name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={<h1 style={{ padding: "0 1.5rem" }}>404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
