import React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { MyButton } from '../Button/Button';
import { DropDownMenuProps } from './DropDownMenuProps';
import { Icons, IconKey } from './DropDownMenuFrontendLogic';
import Link from "next/link";

export const DropDownMenu: React.FC<DropDownMenuProps & { iconSelection?: IconKey }> = ({
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

    const IconComponent = Icons[iconSelection] || Icons.menu;

    return (
        <Dropdown className={classnameDropDown}>
            <MenuButton>
                {IconComponent(classnameMenuIcon)}
            </MenuButton>
            <Menu className={classnameMenu}>
                {options.map((option, index) => (
                    <MenuItem key={option}>
                        <div className={classnameMyButtonDiv}>
                            <Link href={optionsFunctionality[index] || '/'} passHref>
                                <MyButton className={classnameMyButton} text={option} variant={variantMyButton} />
                            </Link>
                        </div>
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
};
