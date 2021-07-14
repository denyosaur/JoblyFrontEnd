import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import JoblyApi from "./api"
import ApiContext from "./apiContext"

import Routes from "./components/Routes";
import Navbar from "./components/navigation/Navbar";

import './css/App.css';

function App() {
  const [authed, setAuthed] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar authed={authed} />
        <ApiContext.Provider value={JoblyApi}>
          <Routes setAuthed={setAuthed} />
        </ApiContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
