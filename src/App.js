import './App.css';
import Capa from './components/Capa';
import 'bootstrap/dist/css/bootstrap.min.css';
import CaroselPerguntas from './components/CaroselPerguntas';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Resultado from './components/Resultado';
import Home from './pages/Home';
import Carosel from './pages/Carosel';
import Resultado from './pages/Resultado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="perguntas" element={<Carosel />} />
          <Route path="resultado" element={<Resultado />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <Resultado />
//   );
// }

export default App;
