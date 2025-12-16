export interface ButtonProps {
    href?: string;
    download?: string;
    className?: string;
    variant?: 'text' | 'outlined' | 'contained';
    text?: string;
    onClick?: () => void;
    ariaLabel?: string;
    title?: string;
    children?: React.ReactNode;
  }
  