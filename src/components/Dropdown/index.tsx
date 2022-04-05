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
  // The default value is shown when value is not selected.
  defaultValue: string;
  // Items are data considered as array of objects with keys as id, value and group.
  options: ItemProps[];
  // onClose?: () => void;
  // onOpen?: () => void;
  // Open sets options of dropdown menu to open or close. True = open, false = close.
  open?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({ defaultValue, options, open }) => {
  const groups = options.map(({ group }) => group);
  const uniqueGroups = useUniqueData(groups);

  const [optionsDisplay, setOptionsDisplay] = useState(open ? 'block' : 'none');
  const [dropdownSelectionValue, setDropdownSelectionValue] = useState('');
  const [searchFilteredOptions, setSearchFilteredOptions] = useState<ItemProps[]>(options);
  const [openDropdown, setOpenDropdown] = useState('open');
  const [dropdownSelectedValues, setDropdownSelectedValues] = useState<string[]>([]);

  const handleOpen = () => {
    setOpenDropdown('close');
    setOptionsDisplay('block');
  };

  const handleClose = () => {
    setOpenDropdown('open');
    setOptionsDisplay('none');
  };

  const handleDisplay = () => {
    if (optionsDisplay === 'none') {
      handleOpen();
    } else {
      handleClose();
    }
  };

  const handleSelect = (val: string) => {
    const filteredItems: ItemProps[] = options.filter(({ value }) => value.toUpperCase().includes(val.toUpperCase()));
    setSearchFilteredOptions(filteredItems);
  };

  return (
    <DropdownContainer>
      <DropdownSelectionContainer style={{ marginBottom: '5px' }}>
        <DropdownTitle
          action={handleDisplay}
          title={dropdownSelectedValues.length === 0 ? defaultValue : dropdownSelectedValues.join(', ')}
          open={openDropdown}
        />
      </DropdownSelectionContainer>
      <DropdownSelectionContainer style={{ display: optionsDisplay }}>
        <DropdownItem>
          <InputStyled
            onSelect={() => handleSelect(dropdownSelectionValue)}
            onChange={(e) => setDropdownSelectionValue(e.target.value)}
            placeholder="Search for option"
            value={dropdownSelectionValue}
          ></InputStyled>
        </DropdownItem>
        {uniqueGroups.map((el: string) => {
          const filteredItems = searchFilteredOptions.filter(({ group }) => group === el);
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
                          setDropdownSelectedValues(useFilteredSelectionData(e.target.id, dropdownSelectedValues));
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
