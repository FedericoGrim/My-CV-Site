'use client';

import React from 'react';

import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import {DropDownMenuProps} from './DropDownMenuProps'

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
    class: className,
    options,
    optionsFunctionality
}) => {

    const handleMenuClick = (index: number) => {
        if (optionsFunctionality[index]) {
            optionsFunctionality[index]();
        } else {
            console.warn(`No functionality defined for option at index: ${index}`);
        }
    };

    return (
        <Dropdown className={className}>
            <MenuButton>
                <MenuIcon/>
            </MenuButton>
            <Menu>
                {options.map((option, index) => (
                    <MenuItem key={option} onClick={() => handleMenuClick(index)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
};