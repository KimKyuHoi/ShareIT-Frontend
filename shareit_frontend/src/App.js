import './App.css';
import { Routes, Route } from "react-router-dom";
import Result from "./components/pages/result/Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/result" element={<Result />} />
      </Routes>

    </div>
  );
}

export default App;
