import "./App.css";
import Grafic from "./components/grafico/grafico";
import Categoria from "./components/tabelas/categoria";
import Respostas from "./components/tabelas/respostas";

function App() {
  return (
    <div className="Container-all">
      <div className="container-GR">
        <Grafic />
        <Categoria />
      </div>
      <div className="container-categoria">
        <Respostas />
      </div>
    </div>
  );
}

export default App;
