import { Routes, Route } from "react-router-dom";
import Result from "./components/result/Result";
import QuestionPage from "./components/Question/QuestionPage";
import Home from "./components/main/Home";
import Error from "./components/Error/Error"
import Contributor from "./components/main/Contributor";
import Help from './components/main/Help';

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
