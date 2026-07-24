import React, { useState } from "react";
import "./App.css";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="App">

      <h1>Ticket Booking App</h1>

      {loggedIn ? (
        <>
          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>

          <UserPage />
        </>
      ) : (
        <>
          <button onClick={() => setLoggedIn(true)}>
            Login
          </button>

          <GuestPage />
        </>
      )}

    </div>

  );

}

export default App;