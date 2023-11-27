import React, { useEffect, useState } from 'react';
import Group from "./Group";

import "../styles/Group.css";
import { getTickets } from '../utils/apiutil';

const Groups = ({ grouping, ordering }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [icons, setIcons] = useState({});
  const [groupItems, setGroupItems] = useState({});

  useEffect(() => {
    getTickets({setData, setIcons, setGroupItems, setLoading});
  }, []);

  const searchKey = ((grouping === "user") ? "userId" : grouping);
  return (
    <>
      {
        loading ? (
          <div className='loading'>
            <div className='ball'></div>
          </div>) :
          (<div className='groups'>
            {
              groupItems[grouping].map((group, index) => {
                const searchVal = ((grouping === "user") ? group.id : group);
                return <Group
                  key={index}
                  grouping={grouping}
                  ordering={ordering}
                  group={group}
                  icons={icons}
                  cards={data.tickets.filter((ticket) => ticket[searchKey] === searchVal)}
                />
              })
            }
          </div>)
      }
    </>
  );
}

export default Groups;
