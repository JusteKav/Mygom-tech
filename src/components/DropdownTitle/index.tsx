import React from 'react';
import styled from 'styled-components';
// import upperArrow from '../../images/arrow.jpg';

type DropdownTitleProps = {
  title: string;
  style?: object;
  action?: () => void;
  open: string;
};
const DropdownTitleStyled = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

const ButttonStyled = styled.button`
  background: transparent;
  border: 0px;
`;

// const DownArrowStyled = styled.img`
//   height: 30px;
//   width: 30px;
//   background-color: white;
// `;

const DropdownTitle: React.FC<DropdownTitleProps> = ({ title, style, action, open }) => {
  return (
    <DropdownTitleStyled onClick={action} style={{ ...style }}>
      <p>{title}</p>
      <ButttonStyled>{open}</ButttonStyled>
      {/* <DownArrowStyled src={upperArrow} alt="arrow" /> */}
    </DropdownTitleStyled>
  );
};
export default DropdownTitle;
