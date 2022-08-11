import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registation from "./components/Registation";
import Update from "./components/Update";
import Login from "./components/Login";
import Block from "./components/Block";
import UserProfile from "./components/UserProfile";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Login />} />
          <Route exact path="/UserProfile" element ={<UserProfile/>}/>
          <Route exact path="/Block"  element={<Block />} />
          <Route exact path="/Update"  element={<Update />} />
          <Route exact path="/Registation" element={<Registation />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;