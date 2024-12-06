import { Budget } from "./Butget.type";

export const butgetArray: Budget[] = [
    {
        inquiryNum: 1,
        name: 'Danilly',
        telephone: 623170559,
        email: 'danilly@email.com',
        services: [{
            nameService: 'Seo',
            priceService: 240,
        },
        {
            nameService: 'Ads',
            priceService: 320,
        },
        {
            nameService: 'Web',
            priceService: 400,
            extrasService: [
               { pages: 4, languages: 2}
            ],
        },
        ],
        totalBudget: 1140,
        date: new Date(),
    },
];