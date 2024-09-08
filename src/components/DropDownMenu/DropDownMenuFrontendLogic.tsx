import MenuIcon from '@mui/icons-material/Menu';
import SquareIcon from '@mui/icons-material/Square';

export type IconKey = 'menu' | 'square';

const menu = (classnameMenuIcon?: string) => <MenuIcon className={classnameMenuIcon} />;
const square = (classnameMenuIcon?: string) => <SquareIcon className={classnameMenuIcon} />;

export const Icons = {
    menu: menu,
    square: square,
};
