export const getDisplayName = (item, type) => {
  const priorities = ["No priority", "Low", "Medium", "High", "Urgent"];
  switch (type) {
    case "status":
      return item;
    case "user":
      return item.name;
    case "priority":
      return priorities[item];
    default:
      return "item_name";
  };
};

export const getUserIdFromName = (name, users) => {
  return users.filter((user, key) => user.name === name)[0].id;
};

export const getUserFromID = (id, users) => {
  return users.filter((user, key) => user.id === id)[0];
};

export const statusIcons = {
  "Backlog": "/icons/circle-dashed-bold.svg",
  "Todo": "/icons/circle-bold.svg",
  "In progress": "/icons/circle-half-fill.svg",
  "Done": "/icons/check-circle-fill.svg",
  "Cancelled": "/icons/x-circle-fill.svg",
};

export const priorityIcons =  {
  0: "/icons/dots-three-bold.svg",
  1: "/icons/cell-signal-low-bold.svg",
  2: "/icons/cell-signal-medium-bold.svg",
  3: "/icons/cell-signal-high-bold.svg",
  4: "/icons/warning-circle-fill.svg",
};