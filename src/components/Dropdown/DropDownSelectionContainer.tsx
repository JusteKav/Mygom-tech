import React from 'react';
import styled from 'styled-components';

type DropdownSelectionContainerProps = {
  style?: object;
  children: React.ReactNode;
};
const DropdownSelectionContainerStyled = styled.div`
  background-color: white;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 25px;
  overflow: auto;
  max-height: 700px;
  display: flex;
  justify-content: center;
`;

const DropdownSelectionContainer: React.FC<DropdownSelectionContainerProps> = ({ style, children }) => {
  return <DropdownSelectionContainerStyled style={{ ...style }}>{children}</DropdownSelectionContainerStyled>;
};
export default DropdownSelectionContainer;
