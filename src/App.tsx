import React from 'react';
import { Dropdown } from './components/Dropdown/index';

const App = () => {
  const values = [
    { id: 1, value: 'Number1', group: 'Category1' },
    { id: 2, value: 'String1', group: 'Category2' },
    { id: 3, value: 'Number2', group: 'Category1' },
    { id: 4, value: 'String2', group: 'Category2' },
    { id: 5, value: 'Number3', group: 'Category1' },
  ];
  return (
    <div>
      <Dropdown title="--- Select options ---" items={values} />
    </div>
  );
};

export default App;
