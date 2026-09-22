import { useReveal } from "../../hooks/useReveal";
import { event } from "../../lib/content";
import VisitIcon from "../ui/VisitIcon";
import flierImg from "../../assets/images/flier-kingdom-young-ministers-2026.jpg";

export default function EventBanner() {
  const copyRef = useReveal();
  const posterRef = useReveal();
  const metaRef = useReveal();

  return (
    <section className="event" id="event">
      <div className="wrap event-inner">
        <div className="reveal" ref={copyRef}>
          <div className="eyebrow">Join us for</div>
          <h2>
            {event.name}
            {event.edition && <span className="event-edition">{event.edition}</span>}
          </h2>
          <p className="theme">"{event.theme}"</p>
          <div className="event-speaker">Ministering: {event.ministering}</div>
          {event.strapline && <p className="event-strapline">{event.strapline}</p>}
          <div className="hero-ctas" style={{ marginTop: "28px" }}>
            <a href="#visit" className="btn-primary">
              Get Directions
            </a>
            <a href={`tel:${event.enquiries[0].replace(/\s+/g, "")}`} className="btn-ghost event-btn-ghost">
              Call for Enquiries
            </a>
          </div>
        </div>

        <div className="event-side">
          <figure className="event-poster reveal" ref={posterRef}>
            <img src={flierImg} alt={`${event.name} flier`} />
          </figure>

          <div className="event-meta reveal" ref={metaRef}>
            <div className="event-meta-row">
              <VisitIcon name="calendar" />
              <div>
                <h4>Date</h4>
                <p>{event.dateRange}</p>
              </div>
            </div>
            <div className="event-meta-row">
              <VisitIcon name="clock" />
              <div>
                <h4>Time</h4>
                <p>
                  {event.schedule.map((s) => (
                    <span key={s.days} style={{ display: "block" }}>
                      {s.days} — {s.time}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="event-meta-row">
              <VisitIcon name="pin" />
              <div>
                <h4>Venue</h4>
                <p>{event.venue}</p>
              </div>
            </div>
            <div className="event-meta-row">
              <VisitIcon name="phone" />
              <div>
                <h4>Enquiries</h4>
                <p>{event.enquiries.join("  ·  ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
