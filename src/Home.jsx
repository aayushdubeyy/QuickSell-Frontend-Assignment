import { useState } from 'react';
import './styles/Home.css';
import Header from './Components/Header';
import Groups from './Components/Groups';

// Here I tried to keep the interface similar for all the screens, taking inspiration from various kanban boards for
// eg. Github that keeps same interface for all the devices.
function App() {
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  const handleGroupOption = (options) => {
    setGrouping(options);
  };

  const handleOrderOption = (options) => {
    setOrdering(options);
  };

  return (
    <div className='home'>
      <Header
        handleGroupOption={handleGroupOption}
        handleOrderOption={handleOrderOption}
        grouping={grouping}
        ordering={ordering}
      />
      <Groups
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
}

export default App;
