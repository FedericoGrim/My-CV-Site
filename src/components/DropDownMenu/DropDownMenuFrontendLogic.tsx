import MenuIcon from '@mui/icons-material/Menu';
import SquareIcon from '@mui/icons-material/Square';

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

export {renderIcon};