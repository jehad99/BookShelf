import "./App.css";
import bookLogo from "./assets/Library-no-text-extra-contrast.svg";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useState } from "react";

function LoginForm({ onSubmit, buttonText }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    onSubmit({
      username: username.value,
      password: password.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
}

function App() {
  const [openModal, setOpenModal] = useState("none");
  function register(formdata) {
    console.log("register", formdata);
  }
  function login(formdata) {
    console.log("login", formdata);
  }
  return (
    <div className="App">
      <img src={bookLogo} width="100" height="100" />
      <h1>Bookshelf</h1>
      <div>
        <button
          onClick={() => {
            setOpenModal("login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setOpenModal("register");
          }}
        >
          Register
        </button>
        <Dialog
          aria-label="Login form"
          isOpen={openModal === "login"}
          onDismiss={openModal === "none"}
        >
          <button onClick={() => setOpenModal("none")}>x</button>
          <h3>Login</h3>
          <p>This is login form</p>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Dialog>
        <Dialog
          aria-label="Register form"
          isOpen={openModal === "register"}
          onDismiss={openModal === "none"}
        >
          <button onClick={() => setOpenModal("none")}>x</button>
          <h3>Register</h3>
          <p>This is register form</p>
          <LoginForm onSubmit={register} buttonText="Register" />
        </Dialog>
      </div>
    </div>
  );
}

export default App;
