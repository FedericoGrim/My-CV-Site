import type { ReactNode } from "react";

export interface PopupPageProps {
  activeItem: string;
  icon: ReactNode;
  onClose: () => void;
}
