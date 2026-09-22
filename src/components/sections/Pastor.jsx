import { useReveal } from "../../hooks/useReveal";
import { pastor } from "../../lib/content";
import portraitPrimary from "../../assets/images/pastor-primary.jpg";
import portraitSeated from "../../assets/images/pastor-seated.jpg";
import portraitPointing from "../../assets/images/pastor-pointing.jpg";

export default function Pastor() {
  const portraitRef = useReveal();
  const copyRef = useReveal();

  return (
    <section className="pastor" id="pastor">
      <div className="wrap pastor-inner">
        <div className="pastor-portrait reveal" ref={portraitRef}>
          <div className="primary">
            <img src={portraitPrimary} alt={pastor.name} />
          </div>
          <div className="pastor-gallery">
            <div className="thumb">
              <img src={portraitSeated} alt={`${pastor.name} seated`} />
            </div>
            <div className="thumb">
              <img src={portraitPointing} alt={`${pastor.name} teaching`} />
            </div>
          </div>
        </div>
        <div className="reveal" ref={copyRef}>
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            Leadership
          </div>
          <h2>A word from our Senior Pastor</h2>
          <p className="quote">{pastor.message}</p>
          <div className="name">{pastor.name}</div>
          <div className="role">{pastor.role}</div>
        </div>
      </div>
    </section>
  );
}
