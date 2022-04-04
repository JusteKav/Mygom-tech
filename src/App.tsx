import React from 'react';
import { Dropdown } from './components/Dropdown';

const App = () => {
  const values = [
    { id: 1, value: 'cat', group: 'animals' },
    { id: 2, value: 'citroen', group: 'cars' },
    { id: 3, value: 'frcog', group: 'animals' },
  ];
  return (
    <div>
      <Dropdown title="--- Select options ---" items={values} />
    </div>
  );
};

export default App;
