import React from 'react';
import './App.css';
// import { PersonScore } from './PersonScore';
// import { PersonScore } from './PersonScoreReducer';
// import { PersonScore } from './PersonScoreRef';
// import { PersonScore } from './PersonScoreMemo';
import { PersonScore } from './PersonScoreCallback';

function App() {
  return (
    <div className="App">
      <PersonScore />
    </div>
  );
}

export default App;
