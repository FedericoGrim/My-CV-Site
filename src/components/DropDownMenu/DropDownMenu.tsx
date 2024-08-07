'use client';

import React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MyButton } from '../Button/Button';
import { DropDownMenuProps } from './DropDownMenuProps';
import { handleMenuClick } from './DropDownMenuLogic';
import { renderIcon } from './DropDownMenuFrontendLogic';

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
    return (
        <Dropdown className={classnameDropDown}>
            <MenuButton>
                {renderIcon(iconSelection, classnameMenuIcon)}
            </MenuButton>
            <Menu className={classnameMenu}>
                {options.map((option, index) => (
                    <MenuItem key={option} onClick={() => handleMenuClick(index, optionsFunctionality)}>
                        <div className={classnameMyButtonDiv}>
                            <MyButton className={classnameMyButton} text={option} variant={variantMyButton} />
                        </div>
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
};
