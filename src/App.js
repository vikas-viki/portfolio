import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/education" element={<h1>education page</h1>} />
          <Route exact path="/projects" element={<h1>projects page</h1>} />
          <Route exact path="/contact_me" element={<h1>contact page</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
