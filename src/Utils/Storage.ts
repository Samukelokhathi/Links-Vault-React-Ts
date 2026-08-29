
import type { itemLinks } from "../Types/ItemLinks";

const STORAGE_KEY = "links";

// GET LINKS FROM LOCAL STORAGE

export const getLinks = (): itemLinks[] => {
    const savedLinks = localStorage.getItem(STORAGE_KEY);

    if (!savedLinks) {
        return [];
    }

    return JSON.parse(savedLinks);
};

// SAVE LINKS TO LOCAL STORAGE

export const saveLinks = (links: itemLinks[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
};

