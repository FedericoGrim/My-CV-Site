export interface DropDownMenuProps {
    iconSelection?: 'menu' | 'BOH';

    classnameDropDown?: string;
    classnameMenuIcon?: string;
    classnameMenu?: string;
    classnameMyButtonDiv?: string;
    classnameMyButton?: string;

    options?: string[];
    optionsFunctionality?: (() => void)[];

    variantMyButton?: 'text' | 'outlined' | 'contained';
}
