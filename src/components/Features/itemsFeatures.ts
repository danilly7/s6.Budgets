import { ItemFeature } from "./itemFeature.type";

export const itemsFeatures: ItemFeature[] = [
    {
        name: 'Seo',
        description: "Programació d'una web responsive completa",
        discount: 0.2,
        discountDescription: 'Ahorra un 20%',
        price: 240,
    },
    {
        name: 'Ads',
        description: "Programació d'una web responsive completa",
        discount: 0.2,
        discountDescription: 'Ahorra un 20%',
        price: 320,
    },
    {
        name: 'Web',
        description: "Programació d'una web responsive completa",
        discount: 0.2,
        discountDescription: 'Ahorra un 20%',
        price: 400,
        extras: {
            pages: 0,
            languages: 0,
        },
    }
]