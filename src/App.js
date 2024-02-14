import "./App.css";
import { Link } from "react-router-dom";
import Yes from "./components/Yes"
import No from "./components/No";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Important from "./components/Important";

function App() {
  return (
    <div className="  flex flex-col  w-screen min-h-screen  bg-rose-300"> 
   <Routes>
    <Route path="/yes"  element={<Yes/>}> </Route>
    <Route path="no"  element={<No/>}> </Route>
    <Route path="/important"  element={<Important/>}> </Route>
    <Route path="/"  element={<Home/>}> </Route>
   </Routes> 
   <Home></Home>
    
    </div>
  );
}

export default App;
