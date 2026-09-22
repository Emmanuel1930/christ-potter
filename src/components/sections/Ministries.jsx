import { useReveal } from "../../hooks/useReveal";
import { ministries } from "../../lib/content";
import MinistryIcon from "../ui/MinistryIcon";

export default function Ministries() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="ministries">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">Life together</div>
          <h2>Ministries for every season</h2>
          <p>Wherever you are in your walk, there is a place at the wheel for you.</p>
        </div>
        <div className="card-grid reveal" ref={gridRef}>
          {ministries.map((ministry) => (
            <div className="card" key={ministry.title}>
              <MinistryIcon name={ministry.icon} />
              <h3>{ministry.title}</h3>
              <p>{ministry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
