export function WinnerModal({ handleReset }) {
  return (
    <section className="winner">
      <div className="text">
        <h2>Ganaste !</h2>
        <button className="reset-button" onClick={handleReset}>
          Empezar de nuevo
        </button>
      </div>
    </section>
  );
}
