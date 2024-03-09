import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div id="details">
        <Outlet />
      </div>
    </>
  );
}

export default App;
