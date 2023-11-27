import "../styles/Card.css"
import Tag from "./Tag";

const Card = ({ cardinfo, icons, grouping }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-id"> {cardinfo.id} </p>
        {grouping !== "user" && icons["user"][cardinfo.userId]}
      </div>
      <div className="card-title">
        {grouping !== "status" && <img className="card-icon" src={icons["status"][cardinfo.status]} alt="card-icon"></img>}
        <div className="card-title-body">
          <h4> {cardinfo.title} </h4>
        </div>
      </div>
      <div className="additional-info">
        {grouping !== "priority" && <img className="card-icon" src={icons["priority"][cardinfo.priority]} alt="card-icon"></img>}
        <div className="tags">
          {cardinfo.tag?.map((tag, key) => <Tag name={tag} key={key} />)}
        </div>
      </div>
    </div>
  );
};

export default Card;