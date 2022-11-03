import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/">
            <h1>Home page</h1>
          </Route>
          <Route exact path="/education">
            <h1>education page</h1>
          </Route>
          <Route exact path="/projects">
            <h1>projects page</h1>
          </Route>
          <Route exact path="/skills">
            <h1>Skills page</h1>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
