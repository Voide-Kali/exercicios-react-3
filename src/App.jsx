import { useState } from "react";
import Notificacao from "./components/Notificacao";
import BotoesDeTema from "./components/BotoesDeTema";
import Previa from "./components/Previa";
import { rotuloDoStatus } from "./utils/statusPedido";

function App() {
  const [tema, setTema] = useState("claro");

  return (
    <div>
      <h1>Exercícios React</h1>

      <h2>Exercício 1</h2>
      <Notificacao mensagens={["Mensagem 1", "Mensagem 2"]} />

      <h2>Exercício 2</h2>
      <p>{rotuloDoStatus("aprovado")}</p>
      <p>{rotuloDoStatus("desconhecido")}</p>

      <h2>Exercício 3</h2>
      <BotoesDeTema tema={tema} setTema={setTema} />
      <Previa tema={tema} />
    </div>
  );
}

export default App;
