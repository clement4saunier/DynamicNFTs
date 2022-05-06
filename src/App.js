import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={JSON.stringify({name: "It's /"})}>
            <Route path="/dynamic" element={JSON.stringify({name: "It's the dynamic route !"})}>
              <Route path=":teamId" element={JSON.stringify({name: "It's the dynamic route with a parameter !"})} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
