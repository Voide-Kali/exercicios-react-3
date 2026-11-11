function BotoesDeTema({ tema, setTema }) {
  return (
    <div>
      <button onClick={() => setTema("claro")}>Tema claro</button>
      <button onClick={() => setTema("escuro")}>Tema escuro</button>
      <p>Tema atual: {tema}</p>
    </div>
  );
}

export default BotoesDeTema;
