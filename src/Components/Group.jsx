import "../styles/Group.css";
import Card from "./Card";
import { GoPlus } from "react-icons/go";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { getDisplayName } from "../utils/util";

const Group = ({ grouping, ordering, icons, group, cards }) => {
  return (
    <div className="group">
      <div className="group-header">
        <div className="group-info">
          {
            (grouping === "user") ?
              icons[grouping][group.id] :
              <img className="group-icon" src={icons[grouping][group]} alt="group-icon"></img>
          }
          <span className="group-title">
            {getDisplayName(group, grouping)}
          </span>
          <span>{cards.length}</span>
        </div>
        <div className="group-icons">
          <GoPlus className="icon-plus" />
          <IoEllipsisHorizontalSharp />
        </div>
      </div>
      <div className="group-content">
        {
          cards.sort((c1, c2) => ((ordering === "title") ? (c1[ordering].localeCompare(c2[ordering])) : (c2[ordering] - c1[ordering]))).map((card, index) => <Card icons={icons} grouping={grouping} cardinfo={card} key={index} />)
        }
      </div>
    </div>
  );
};

export default Group;