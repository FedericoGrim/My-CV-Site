'use client';

import React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SquareIcon from '@mui/icons-material/Square';

import { MyButton } from '../Button/Button';
import { DropDownMenuProps } from './DropDownMenuProps';

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  iconSelection = 'menu',

  classnameDropDown,
  classnameMenu,
  classnameMenuIcon,
  classnameMyButton,
  classnameMyButtonDiv,

  variantMyButton = 'text',
  
  options = ['text', 'text', 'text'],
  optionsFunctionality = []
}) => {

  const handleMenuClick = (index: number) => {
    if (optionsFunctionality[index]) {
      optionsFunctionality[index]();
    } else {
      console.warn(`No functionality defined for option at index: ${index}`);
    }
  };

  const renderIcon = () => {
    switch (iconSelection) {
      case 'menu':
        return <MenuIcon className={classnameMenuIcon} />;
      case 'BOH':
        return <SquareIcon className={classnameMenuIcon} />;
      default:
        return <MenuIcon className={classnameMenuIcon} />;
    }
  };

  return (
    <Dropdown className={classnameDropDown}>
      <MenuButton>
        {renderIcon()}
      </MenuButton>
      <Menu className={classnameMenu}>
        {options.map((option, index) => (
          <MenuItem key={option} onClick={() => handleMenuClick(index)}>
            <div className={classnameMyButtonDiv}>
              <MyButton className={classnameMyButton} text={option} variant={variantMyButton} />
            </div>
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};
