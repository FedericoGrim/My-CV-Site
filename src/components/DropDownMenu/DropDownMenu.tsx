'use client';

import React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MyButton } from '../Button/Button';
import { DropDownMenuProps } from './DropDownMenuProps';
import { handleMenuClick } from './DropDownMenuLogic';
import { Icons, IconKey } from './DropDownMenuFrontendLogic'; // Importa l'oggetto Icons

export const DropDownMenu: React.FC<DropDownMenuProps & { iconSelection?: IconKey }> = ({
    iconSelection = 'menu',  // Imposta "menu" come icona predefinita
    classnameDropDown,
    classnameMenu,
    classnameMenuIcon,
    classnameMyButton,
    classnameMyButtonDiv,
    variantMyButton = 'text',
    options = ['text', 'text', 'text'],
    optionsFunctionality = []
}) => {

    // Ottieni l'icona selezionata dall'oggetto Icons o usa il default
    const IconComponent = Icons[iconSelection] || Icons.menu;

    return (
        <Dropdown className={classnameDropDown}>
            <MenuButton>
                {IconComponent(classnameMenuIcon)} {/* Renderizza l'icona dinamica */}
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
