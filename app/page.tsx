export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif", maxWidth: 600 }}>
      <h1>claudeskills</h1>
      <p>Claude Skill Directory</p>

      <hr style={{ margin: "32px 0" }} />

      <section>
        <h2>Claude Code auf dem iPhone öffnen</h2>
        <p>
          Claude Code ist als Web-App unter{" "}
          <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">
            claude.ai/code
          </a>{" "}
          verfügbar und kann direkt im Safari-Browser auf dem iPhone genutzt werden.
        </p>

        <h3>Schritte</h3>
        <ol>
          <li>
            Öffne <strong>Safari</strong> auf deinem iPhone.
          </li>
          <li>
            Gehe zu{" "}
            <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">
              claude.ai/code
            </a>
            .
          </li>
          <li>
            Tippe auf das <strong>Teilen-Symbol</strong> (Quadrat mit Pfeil nach oben).
          </li>
          <li>
            Wähle <strong>„Zum Home-Bildschirm"</strong>, um Claude Code als App zu speichern.
          </li>
          <li>
            Öffne die neue App-Verknüpfung vom Home-Bildschirm – Claude Code startet direkt im
            Vollbildmodus.
          </li>
        </ol>

        <a
          href="https://claude.ai/code"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 16,
            padding: "12px 24px",
            background: "#7c3aed",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Claude Code öffnen
        </a>
      </section>
    </main>
  );
}
