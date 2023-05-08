import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Carosel from './pages/Carosel';
import Resultado from './pages/Resultado';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="perguntas" element={<Carosel />} />
            <Route path="resultado" element={<Resultado />} />
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
