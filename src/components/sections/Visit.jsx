import { useReveal } from "../../hooks/useReveal";
import { visitInfo } from "../../lib/content";
import VisitIcon from "../ui/VisitIcon";

export default function Visit() {
  const headRef = useReveal();
  const infoRef = useReveal();
  const mapRef = useReveal();

  return (
    <section id="visit">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">Join us</div>
          <h2>Plan your visit</h2>
          <p>We keep a seat, a songbook, and a warm welcome ready for you every Sunday.</p>
        </div>
        <div className="visit-grid">
          <div className="reveal" ref={infoRef}>
            {visitInfo.map((item) => (
              <div className="info-row" key={item.title}>
                <VisitIcon name={item.icon} />
                <div>
                  <h4>{item.title}</h4>
                  <p>
                    {item.lines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < item.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="map-box reveal" ref={mapRef} aria-hidden="true">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <rect width="400" height="300" fill="#EFE9DC" />
              <g stroke="#DDD5C7" strokeWidth="1">
                <line x1="0" y1="60" x2="400" y2="60" />
                <line x1="0" y1="130" x2="400" y2="130" />
                <line x1="0" y1="200" x2="400" y2="200" />
                <line x1="0" y1="250" x2="400" y2="250" />
                <line x1="80" y1="0" x2="80" y2="300" />
                <line x1="180" y1="0" x2="180" y2="300" />
                <line x1="280" y1="0" x2="280" y2="300" />
                <line x1="350" y1="0" x2="350" y2="300" />
              </g>
              <path d="M0 150 L400 150" stroke="#C7BCA6" strokeWidth="4" />
              <path d="M200 0 L200 300" stroke="#C7BCA6" strokeWidth="4" />
              <circle cx="200" cy="150" r="9" fill="#B5702F" />
              <path d="M200 150 v-26" stroke="#B5702F" strokeWidth="3" strokeLinecap="round" />
              <circle cx="200" cy="124" r="4" fill="#B5702F" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
