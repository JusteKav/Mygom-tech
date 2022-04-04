import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import DropdownTitle from './DropdownTitle';
import DropdownSelectionContainer from './DropDownSelectionContainer';
import { useUniqueData } from '../../utils/hooks/index';

const DropdownContainer = styled.div`
  margin: 10px;
`;

const LabelStyled = styled.label`
  font-weight: bold;
`;

type DropdownProps = {
  title: string;
  items: { id: number; value: string; group: string }[];
};

export const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const groups = items.map(({ group }) => group);
  const uniqueGroups = useUniqueData(groups);
  const [display, setDisplay] = useState('none');
  const [open, setOpen] = useState('open');
  const [values, setValues] = useState<string[]>([]);

  const onOpen = () => {
    setOpen('close');
    setDisplay('block');
  };

  const onClose = () => {
    setOpen('open');
    setDisplay('none');
  };
  const handleDisplay = () => {
    if (display === 'none') {
      onOpen();
    } else {
      onClose();
    }
  };

  const handleData = (name: string) => {
    if (values.includes(name)) {
      const newValues = values.filter((el) => el !== name);
      setValues(newValues);
    } else {
      setValues([...values, name]);
    }
  };

  return (
    <DropdownContainer>
      <DropdownSelectionContainer style={{ marginBottom: '5px' }}>
        <DropdownTitle action={handleDisplay} title={title} open={open} />
      </DropdownSelectionContainer>
      <DropdownSelectionContainer style={{ display: display }}>
        <DropdownItem>
          <LabelStyled>Selected: {values.join(', ')}</LabelStyled>
        </DropdownItem>

        {uniqueGroups.map((el) => {
          const filteredItems = items.filter(({ group }) => group === el);
          return (
            <div key={el}>
              <DropdownItem style={{ backgroundColor: '#ebece7' }}>
                <label>{el}</label>
              </DropdownItem>
              <div>
                {filteredItems.map(({ value, id, group }) => {
                  return (
                    <DropdownItem key={id}>
                      <label htmlFor={value}>{value}</label>
                      <input
                        id={value}
                        type="checkbox"
                        onChange={(e) => {
                          handleData(e.target.id);
                        }}
                      />
                    </DropdownItem>
                  );
                })}
              </div>
            </div>
          );
        })}
      </DropdownSelectionContainer>
    </DropdownContainer>
  );
};
