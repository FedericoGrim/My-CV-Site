export interface DropDownMenuProps{
    class: string;
    options: string[];
    optionsFunctionality: (() => void)[];
}