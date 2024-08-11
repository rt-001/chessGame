import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Landing} from "./screens/Landing";
import { Game } from './screens/Game';
function App() {
  return (
  <div className="bg-slate-950 h-screen w-screen flex justify-center">

  
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>
  </div>
  
  
  );
}

export default App;