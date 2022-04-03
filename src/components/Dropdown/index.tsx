import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownItem from '../DropdownItem';
import DropdownSelectionContainer from '../DropdownSelectionContainer';

const DropdownContainer = styled.div`
  margin: 10px;
`;
export const Dropdown = () => {
  const [display, setDisplay] = useState('none');

  const handleDisplay = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };
  return (
    <DropdownContainer>
      <DropdownSelectionContainer style={{ marginBottom: '5px' }}>
        <DropdownItem action={handleDisplay} title="animal" />
      </DropdownSelectionContainer>
      <DropdownSelectionContainer style={{ display: display }}>
        <DropdownItem title="cat" />
        <DropdownItem title="dog" />
        <DropdownItem title="frog" />
      </DropdownSelectionContainer>
    </DropdownContainer>
  );
};
