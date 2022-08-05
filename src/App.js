// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Registation from "./components/Registation";
// import Login from "./components/Login";
// import Sidemenu from "./components/Sidemenu";
// import "./App.css";

// function App() {
//   return (
//     <>

//     <Sidemenu/>
//     <h1>Helloworld</h1>
//     </>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registation from "./components/Registation";

import Login from "./components/Login";
import Block from "./components/Block";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Exact element={<Login />} />
          <Route exact path="/Block" Exact element={<Block />} />
         
          <Route exact path="/Registation" element={<Registation />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;