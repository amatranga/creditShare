import React from 'react';
import ReactDOM from 'react-dom';
// import CreditShare from './components/CreditShare';
import Hello from './components/Hello';

ReactDOM.render(
  <Hello language="TypeScript" framework="React" />,
  document.getElementById('app') as HTMLElement
);
