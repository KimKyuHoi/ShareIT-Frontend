import './App.css';
import { Routes, Route } from "react-router-dom";
import Result from "./components/pages/result/Result";
import QuestionPage from "./components/pages/Question/QuestionPage";
import Error from "./components/pages/Error/Error"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
