import { useState } from 'react';

import "../styles/Header.css"
import Overlay from "./Overlay";

const Header = ({ handleGroupOption, handleOrderOption, grouping, ordering }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleDisplayClick = () =>
    setShowOverlay(!showOverlay);

  return (
    <div className='header'>
      <button onClick={handleDisplayClick} className="button">
        <img src="/icons/faders-horizontal-bold.svg" alt='horizontal-fader-icon'></img>
        Display
        <img src="/icons/caret-down-bold.svg" alt='caret-down-icon'></img>
      </button>
      {
        showOverlay &&
        <Overlay
          handleGroupOption={handleGroupOption}
          handleOrderOption={handleOrderOption}
          grouping={grouping}
          ordering={ordering}
        />
      }
    </div>
  );
};

export default Header;
