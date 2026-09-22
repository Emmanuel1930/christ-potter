import { weeklyServices, church } from "../../lib/content";

export default function ServiceStrip() {
  return (
    <div className="strip" id="services">
      <div className="wrap strip-grid">
        {weeklyServices.map((service) => (
          <div className="strip-item" key={service.day}>
            <div className="day">{service.day}</div>
            <div className="num">{service.name}</div>
            <div className="label">{service.time}</div>
          </div>
        ))}
      </div>
      <div className="wrap strip-live">{church.liveNote}</div>
    </div>
  );
}
