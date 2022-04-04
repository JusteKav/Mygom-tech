import React from 'react';
import styled from 'styled-components';

type DropdownItemProps = {
  style?: object;
  action?: () => void;
  children?: React.ReactNode;
};
const DropdownItemStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  & label {
    width: 100%;
    padding: 20px 0px;
  }
`;

const DropdownItem: React.FC<DropdownItemProps> = ({ style, action, children }) => {
  return (
    <DropdownItemStyled onClick={action} style={{ ...style }}>
      {children}
    </DropdownItemStyled>
  );
};
export default DropdownItem;
