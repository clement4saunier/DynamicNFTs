import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Type from "./components/pages/Type";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Type>HOME</Type>}>
            <Route path="type" element={<Type/>}>
              <Route path=":teamId" element={JSON.stringify({name: "It's the dynamic route with a parameter !"})} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
