function Previa({ tema }) {
  return (
    <div
      style={{
        background: tema === "escuro" ? "#222" : "#fff",
        color: tema === "escuro" ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>Prévia</h2>
      <p>O tema atual é {tema}.</p>
    </div>
  );
}

export default Previa;
