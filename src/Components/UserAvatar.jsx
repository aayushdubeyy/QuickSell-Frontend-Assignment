import "../styles/Card.css";

const UserAvatar = ({user, iconsrc}) => {
  return (
    <span className="card-user">
      <img src={iconsrc} alt="icon"></img>
      <span className={`availability ${user.available?"av-active":""}`}></span>
    </span>
  );
};

export default UserAvatar;
