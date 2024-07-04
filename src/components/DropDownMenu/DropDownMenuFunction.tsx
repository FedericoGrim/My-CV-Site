import MenuIcon from '@mui/icons-material/Menu';
import SquareIcon from '@mui/icons-material/Square';

const handleMenuClick = (index: number, optionsFunctionality: (() => void)[]) => {
    if (index >= 0 && index < optionsFunctionality.length) {
        optionsFunctionality[index]();
    } else {
        console.warn(`No functionality defined for option at index: ${index}`);
    }
};

const renderIcon = (iconSelection: 'menu' | 'BOH', classnameMenuIcon?: string) => {
    switch (iconSelection) {
        case 'menu':
            return <MenuIcon className={classnameMenuIcon} />;
        case 'BOH':
            return <SquareIcon className={classnameMenuIcon} />;
        default:
            return <MenuIcon className={classnameMenuIcon} />;
    }
};

export { handleMenuClick, renderIcon };
