import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Carosel from './pages/Carosel';
import Resultado from './pages/Resultado';
import { useEffect, useState } from 'react';

function App() {
  // const perguntas = Questions.perguntas();
  const [perguntas, setPerguntas] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/questions/')
      .then(res => res.json())
      .then(res => {
        setPerguntas(res)
      })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="perguntas" element={<Carosel perguntas={perguntas} />} />
            <Route path="resultado/:id" element={<Resultado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// function App() {
//   return (
//     <Resultado />
//   );
// }

export default App;
