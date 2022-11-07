import { BrowserRouter, Route, Routes } from "react-router-dom"
import Education from "./Components/Education";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/education" element={<Education/>} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact_me" element={<h1>contact page</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
