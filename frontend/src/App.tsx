
/* eslint-disable @typescript-eslint/no-unused-vars */

import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
  <>
  <BrowserRouter basename="/app">
    <Routes>
        <Route path="/" element={}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;