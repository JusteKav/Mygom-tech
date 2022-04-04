import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import DropdownTitle from './DropdownTitle';
import DropdownSelectionContainer from './DropDownSelectionContainer';
import { useUniqueData, useFilteredSelectionData } from '../../utils/hooks/index';

const DropdownContainer = styled.div`
  margin: 10px;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: 0px;
  padding: 40px 0px;
`;

type ItemProps = {
  id: number;
  value: string;
  group: string;
};

type DropdownProps = {
  title: string;
  items: ItemProps[];
};

export const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const groups = items.map(({ group }) => group);
  const uniqueGroups = useUniqueData(groups);

  const [display, setDisplay] = useState('none');
  const [input, setInput] = useState('');
  const [filteredValues, setFilteredValues] = useState<ItemProps[]>(items);
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

  const handleSelect = (val: string) => {
    const filteredItems: ItemProps[] = items.filter(({ value }) => value.includes(val));
    setFilteredValues(filteredItems);
  };

  return (
    <DropdownContainer>
      <DropdownSelectionContainer style={{ marginBottom: '5px' }}>
        <DropdownTitle action={handleDisplay} title={values.length === 0 ? title : values.join(', ')} open={open} />
      </DropdownSelectionContainer>
      <DropdownSelectionContainer style={{ display: display }}>
        <DropdownItem>
          <InputStyled
            onSelect={() => handleSelect(input)}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for option"
            type="text"
            value={input}
          ></InputStyled>
        </DropdownItem>
        {uniqueGroups.map((el) => {
          const filteredItems = filteredValues.filter(({ group }) => group === el);
          return (
            <div key={el}>
              <DropdownItem style={{ fontWeight: 'bold' }}>
                <label>{el}</label>
              </DropdownItem>
              <div>
                {filteredItems.map(({ value, id }) => {
                  return (
                    <DropdownItem style={{ paddingLeft: '50px' }} key={id}>
                      <label htmlFor={value}>{value}</label>
                      <input
                        id={value}
                        type="checkbox"
                        onChange={(e) => {
                          setValues(useFilteredSelectionData(e.target.id, values));
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
