import { useState } from "react";
import "./style.css";

function Categoria() {
  const [lista] = useState([
    { estudo: "7:30 ás 9:15 da manhã canvas e atividades." },
    { estudo: "9:15 ás 10:30 da manhã DEMO." },
    { estudo: "10:45 ás 11:00 da manhã Daily com facilitador" },
    { estudo: "15:00 da tarde conteudo suplementar e entregas" },
    { trabalho: "7:15 da manhã dar comida e água para minha cachorrinha." },
    { trabalho: "11:00 da manhã Daily com meus Devs." },
    { trabalho: "13:00 ás 15:00 horas da tarde Peer Coach." },
    { trabalho: "14:00 horas Daily com facilitador." },
    { trabalho: "17 horas da tarde dar comida para minha cachorrinha" },
    { saude: "8:00 da manhã tomar vitaminas." },
    { saude: "8:15 da manhã tomar café-da-manhã." },
    { saude: "12:00 da tarde almoço." },
    { saude: "13:30 da tarde tomar medicações." },
    { saude: "18:00 ás 21:30 horas da noite academia." },
    { saude: "21:30 da noite jantar." },
    { saude: "11:00 horas da noite dormir." },
    { lazer: "7:00 horas da manhã passear com minha cachorrinha" },
    {
      lazer:
        "jogar no computador, passear na praia, aos finais de semana e feriado.",
    },
  ]);
  const [filtrar, setFiltrar] = useState([]);
  const [tarefa, setTarefa] = useState("");

  function filtrarElementos(doIt) {
    if (doIt === "estudo") {
      setFiltrar(lista.filter((element) => element.estudo));
      setTarefa(doIt);
    }
    if (doIt === "trabalho") {
      setFiltrar(lista.filter((element) => element.trabalho));
      setTarefa(doIt);
    }

    if (doIt === "saude") {
      setFiltrar(lista.filter((element) => element.saude));
      setTarefa(doIt);
    }

    if (doIt === "lazer") {
      setFiltrar(lista.filter((element) => element.lazer));
      setTarefa(doIt);
    }
  }

  return (
    <>
      <div className="container-buttons">
        <button onClick={() => filtrarElementos("estudo")}>Estudo</button>
        <button onClick={() => filtrarElementos("trabalho")}>Trabalho</button>
        <button onClick={() => filtrarElementos("saude")}>Saúde</button>
        <button onClick={() => filtrarElementos("lazer")}>Lazer</button>
      </div>
      <div className="container-filtro">
        {tarefa === "estudo" ? (
          <ul>
            {filtrar?.map((element) => (
              <li>{element.estudo}</li>
            ))}
          </ul>
        ) : tarefa === "trabalho" ? (
          <ul>
            {filtrar?.map((element) => (
              <li>{element.trabalho}</li>
            ))}
          </ul>
        ) : tarefa === "saude" ? (
          <ul>
            {filtrar?.map((element) => (
              <li>{element.saude}</li>
            ))}
          </ul>
        ) : tarefa === "lazer" ? (
          <ul>
            {filtrar?.map((element) => (
              <li>{element.lazer}</li>
            ))}
          </ul>
        ) : (
          <div className="click">Click nos Botões</div>
        )}
      </div>
    </>
  );
}

export default Categoria;
