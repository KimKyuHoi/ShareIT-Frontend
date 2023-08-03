import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/pages/Main/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}
export default App;
