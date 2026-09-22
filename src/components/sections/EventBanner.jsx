import { useReveal } from "../../hooks/useReveal";
import { event } from "../../lib/content";
import VisitIcon from "../ui/VisitIcon";

export default function EventBanner() {
  const copyRef = useReveal();
  const metaRef = useReveal();

  return (
    <section className="event" id="event">
      <div className="wrap event-inner">
        <div className="reveal" ref={copyRef}>
          <div className="eyebrow">Join us for</div>
          <h2>{event.name}</h2>
          <p className="theme">"{event.theme}"</p>
          <div className="event-speaker">Hosted by {event.host}</div>
        </div>
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
        </div>
      </div>
    </section>
  );
}
