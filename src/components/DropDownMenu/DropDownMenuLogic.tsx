const handleMenuClick = (index: number, optionsFunctionality: (() => void)[]) => {
    if (index >= 0 && index < optionsFunctionality.length) {
        optionsFunctionality[index]();
    } else {
        console.warn(`No functionality defined for option at index: ${index}`);
    }
};

export { handleMenuClick };
