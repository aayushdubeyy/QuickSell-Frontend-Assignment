import { useState } from 'react';

import "../styles/Overlay.css"

const Overlay = ({ handleGroupOption, handleOrderOption, grouping, ordering }) => {
  const [selectedGrouping, setGrouping] = useState(grouping);
  const [selectedOrdering, setSelectedOrdering] = useState(ordering);

  const changeGrouping = (event) => {
    setGrouping(event.target.value);
    handleGroupOption(event.target.value);

  };
  const changeOrdering = (event) => {
    setSelectedOrdering(event.target.value);
    handleOrderOption(event.target.value);
  };

  const groupings = ["status", "user", "priority"];
  const orderings = ["priority", "title"];

  return (
    <div className="overlay-content">
      <div className='display-option-container'>
        <label htmlFor="grouping">Grouping</label>
        <select id="grouping" value={selectedGrouping} onChange={changeGrouping}>
          { groupings.map((item, key) =><option key={key} value={item}>{item}</option>) }
        </select>
      </div>
      <div className='display-option-container'>
        <label htmlFor="ordering">Ordering</label>
        <select id="ordering" value={selectedOrdering} onChange={changeOrdering}>
          { orderings.map((item, key) =><option key={key} value={item}>{item}</option>) }
        </select>
      </div>
    </div>
  );
};

export default Overlay;
