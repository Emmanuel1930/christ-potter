import { useReveal } from "../../hooks/useReveal";
import { church } from "../../lib/content";

export default function Mission() {
  const verseRef = useReveal();
  const copyRef = useReveal();

  return (
    <section className="mission" id="about">
      <div className="wrap mission-inner">
        <blockquote className="verse reveal" ref={verseRef}>
          "Yet, O Lord, you are our Father; we are the clay, and you are our potter; we are all the work of your
          hand."
          <cite>Isaiah 64:8</cite>
        </blockquote>
        <div className="mission-copy reveal" ref={copyRef}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "16px" }}>Our Vision</h2>
          <p style={{ fontSize: "1.15rem", color: "var(--ink)", fontWeight: 500 }}>{church.vision}</p>
          <p>
            We take our name from the image the prophet Isaiah gives us: a Potter who does not discard the marred
            vessel, but presses it back onto the wheel and begins again. Every gathering, every teaching, and every
            act of service at {church.name} is aimed at one thing — helping men and women walk daily in the reality
            of who Christ is, not merely believe it.
          </p>
        </div>
      </div>
    </section>
  );
}
