export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={item.title}>
          <div className="timeline-marker" />
          <div className="timeline-content">
            <span>{item.period}</span>
            <h2>{item.title}</h2>
            <h3>{item.place}</h3>
            <p>{item.description}</p>
            <ul>
              {item.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
