export interface DropDownMenuProps {
    iconSelection?: string; //sceglie l'icona da usare tra quelle caricate sul file DropDownMenuFrontEndLogic

    classnameDropDown?: string; //lo stile del tasto del DropDownMenu
    classnameMenuIcon?: string; //lo stile per l'icona del DropDownMenu
    classnameMenu?: string; //lo stile per il menu che si apre quando lo premi
    classnameMyButtonDiv?: string; //lo stile per il div che contiene i vari tasti del menu
    classnameMyButton?: string; //lo stile per i vari tasti del menu

    options?: string[]; // Array di stringhe per le opzioni del menu
    buttonsLinks?: string[]; // Array di stringhe (es. URL)

    variantMyButton?: 'text' | 'outlined' | 'contained'; //i tre aspetti per i pulsanti del menu
}
