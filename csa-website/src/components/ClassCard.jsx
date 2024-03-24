import "./ClassCard.css";

// eslint-disable-next-line react/prop-types
const ClassCard = ({ title, desc }) => {
  return (
    <div className="class-card">
      <h2 className="class-title">{title}</h2>
      <p className="class-desc">{desc}</p>
      <button className="join-btn">Join Class</button>
    </div>
  );
};

export default ClassCard;
