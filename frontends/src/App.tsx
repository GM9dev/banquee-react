import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import AllInOne from "./components/AllInOne/AllInOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-in-one" element={<AllInOne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
