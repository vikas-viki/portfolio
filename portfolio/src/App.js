import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/ProjectsComps/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={"This is home page"} />
          <Route path="/education" element={"This is education page"} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={"This is skills page"} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
