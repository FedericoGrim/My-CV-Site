export interface ImageProps {
    src: string;  // Il percorso dell'immagine
    alt: string;  // Descrizione dell'immagine (reso obbligatorio per accessibilità)
    width?: number;  // Larghezza dell'immagine, non usato con fill
    height?: number;  // Altezza dell'immagine, non usato con fill
    className?: string;  // Classe CSS per l'immagine
    divClassName?: string;  // Classe CSS per il contenitore div

    // Layout dell'immagine
    fill?: boolean;  // Indica se l'immagine deve riempire il contenitore
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';  // Come l'immagine si adatta al contenitore

    // Ottimizzazione immagine
    priority?: boolean;  // Indica se questa immagine ha priorità di caricamento
    unoptimized?: boolean;  // Se true, disabilita l'ottimizzazione automatica di Next.js
    sizes?: string;  // Attributo sizes per immagini responsive
    placeholder?: 'blur' | 'empty';  // Usa un segnaposto sfocato o nessun segnaposto
    blurDataURL?: string;  // URL per l'immagine sfocata (usata con placeholder="blur")
}
