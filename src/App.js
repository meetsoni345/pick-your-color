import React from 'react';
import Pallate from './Pallate';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Pallate {...seedColors[0]} />
    </div>
  )
}

export default App
