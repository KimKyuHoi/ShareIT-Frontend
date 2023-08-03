import './App.css';
import { Routes, Route } from "react-router-dom";
import Result from "./components/pages/result/Result";
import QuestionPage from "./components/pages/Question/QuestionPage";
import Home from "./components/pages/main/Home";
import Error from "./components/pages/Error/Error"
import Contributor from './components/pages/main/Contributor';
import Help from './components/pages/main/Help';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path='/contributor' element={<Contributor />} />
        <Route path='/help' element={<Help />} />
        <Route path='/' element={<Home />} /> 
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
