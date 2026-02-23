import { Link } from "react-router-dom";

export default function CardLink({ to, pill, title, desc,icon = "☕"  }) {
  return (
    <Link className="cardlink" to={to}>
      <div className="cardlink__top">
        <span className="pill">{pill}</span>
        <span aria-hidden="true">→</span>
      </div>

      <h2 style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span aria-hidden="true">{icon}</span>
        <span>{title}</span>
      </h2>

      <p>{desc}</p>
    </Link>
  );
}