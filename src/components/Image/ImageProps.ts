export interface ImageProps {
    src: string;  // Il percorso dell'immagine
    alt?: string;  // Descrizione dell'immagine
    width?: number;  // Larghezza dell'immagine, non usato con fill
    height?: number;  // Altezza dell'immagine, non usato con fill
    className?: string;  // Classe CSS per l'immagine
    divClassName?: string;  // Classe CSS per il contenitore div

    // Layout dell'immagine
    fill?: boolean;  // Indica se l'immagine deve riempire il contenitore
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';  // Come l'immagine si adatta al contenitore
}
