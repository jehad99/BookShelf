import "./App.css";
import bookLogo from "./assets/Library-no-text-extra-contrast.svg";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState("none");
  return (
    <div className="App">
      <img src={bookLogo} width="80" height="80" />
      <h1>Book Shelf</h1>
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
        </Dialog>
        <Dialog
          aria-label="Register form"
          isOpen={openModal === "register"}
          onDismiss={openModal === "none"}
        >
          <button onClick={() => setOpenModal("none")}>x</button>
          <h3>Register</h3>
          <p>This is register form</p>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
