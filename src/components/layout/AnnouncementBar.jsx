import { event } from "../../lib/content";

export default function AnnouncementBar() {
  return (
    <a href="#event" className="announce">
      <span className="announce-tag">Upcoming</span>
      <span className="announce-text">
        {event.name} <span className="announce-sep">·</span> {event.dateRange}
      </span>
      <span className="announce-cta">See details →</span>
    </a>
  );
}
