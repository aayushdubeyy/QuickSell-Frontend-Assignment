import "../styles/Card.css";

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <img src="/icons/circle-fill.svg" alt="circle-fill-icon"></img>
      <span>{name}</span>
    </div>
  );
};

export default Tag;