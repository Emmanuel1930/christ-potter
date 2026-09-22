import PotterWheel from "../ui/PotterWheel";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">A place still being shaped</div>
          <h1>
            You are the clay.
            <br />
            He is <em>the Potter.</em>
          </h1>
          <p className="lede">
            Christ the Potter Church is a congregation in Ile Ife devoted to teaching men to walk in the reality of
            who Christ is — a family where every life is a work still on the wheel, formed with patience and
            purpose.
          </p>
          <div className="hero-ctas">
            <a href="#visit" className="btn-primary">
              Plan your visit
            </a>
            <a href="#about" className="btn-ghost">
              Our story
            </a>
          </div>
        </div>
        <figure className="hero-figure">
          <PotterWheel />
          <figcaption>
            "Yet, O Lord, you are our Father; we are the clay, and you are our potter." — Isaiah 64:8
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
