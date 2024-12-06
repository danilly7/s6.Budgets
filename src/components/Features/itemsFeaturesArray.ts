import { ItemFeature } from "./Features.types";

export const itemsFeaturesArray: ItemFeature[] = [
    {
        name: 'Seo',
        description: "Programació d'una web responsive completa",
        discount: 20,
        discountDescription: 'Estalvia un 20%',
        price: 240,
    },
    {
        name: 'Ads',
        description: "Programació d'una web responsive completa",
        discount: 20,
        discountDescription: 'Estalvia un 20%',
        price: 320,
    },
    {
        name: 'Web',
        description: "Programació d'una web responsive completa",
        discount: 20,
        discountDescription: 'Estalvia un 20%',
        price: 400,
        extras: {
            pages: 0,
            languages: 0,
        },
    }
];