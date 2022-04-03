import React from 'react';
import styled from 'styled-components';

type DropdownItemProps = {
  title: string;
  style?: object;
  action?: () => void;
};
const DropdownItemStyled = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  display:'flex'
  justify-content: space-between;
`;

const DropdownItem: React.FC<DropdownItemProps> = ({ title, style, action }) => {
  return (
    <DropdownItemStyled onClick={action} style={{ ...style }}>
      {title}
      <input type="checkbox" />
    </DropdownItemStyled>
  );
};
export default DropdownItem;
