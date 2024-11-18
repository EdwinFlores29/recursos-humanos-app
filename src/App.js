import ListadoEmpleados from "./components/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <Navegacion />
              <Routes>
                  <Route path="/" element={<ListadoEmpleados />} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
