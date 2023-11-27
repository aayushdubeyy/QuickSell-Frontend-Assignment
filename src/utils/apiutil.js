import { priorityIcons, statusIcons } from './util';
import UserAvatar from "../Components/UserAvatar";
import axios from 'axios';

export const createItems = async (data, setIcons, setGroupItems) => {
  const { users } = data;
  const groupItems = {
    "status": ["Backlog", "Todo", "In progress", "Done", "Cancelled"],    // all possible values of statuses
    "user": [...users].sort((a, b) => a.name - b.name),                   // all possible values of users
    "priority": [0, 4, 3, 2, 1],                                          // all possible values of priorities
  };

  // generate random dummy avatar images for users
  let userIcons = {};
  groupItems["user"].forEach((user, key) =>
    userIcons[user.id] = <UserAvatar
      user={user}
      iconsrc={`https://unsplash.it/10${key}`}
    />
  );

  const icons = {
    status: statusIcons,
    priority: priorityIcons,
    user: userIcons
  };
  setIcons(icons);
  setGroupItems(groupItems);
};

export const getTickets = async (setters) => {
  axios.get(process.env.REACT_APP_TICKETS_URI).then((res) => {
    if (res.data) {
      setters.setData(res.data);
      setters.setLoading(false);
      createItems(res.data, setters.setIcons, setters.setGroupItems);
    };
  }).catch(err => { console.error(err); });
};