import React, { useState } from "react";
import logo from "./Logo Cyanic.png";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = (event) => {
    event.preventDefault();
    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa("");
  };

  const marcarConcluida = (index) => {
    setTarefas(
      tarefas.map((tarefa, i) =>
        i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const excluir = (index) => {
    setTarefas(tarefas.filter((tarefa, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <h1>Lista de Tarefas</h1>
        </div>
        <form onSubmit={adicionarTarefa}>
          <input
            value={novaTarefa}
            onChange={(event) => setNovaTarefa(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>
        <ol>
          {tarefas.map((tarefa, index) => (
            <li
              key={index}
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
              }}
            >
              {tarefa.texto}
              <button onClick={() => marcarConcluida(index)}>
                {tarefa.concluida ? "Desmarcar" : "Marcar"}
              </button>
              <button onClick={() => excluir(index)}>
                Excluir
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;