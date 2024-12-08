import { Budget } from "./Budget.types";

export const budgetArr: Budget[] = [
    {
        inquiryBudget: {
            name: 'Danilly',
            telephone: '123456789',
            email: 'danilly@email.com',
            date: new Date().toLocaleDateString(),
        },
        featuresBudget: {
            services: [
                {
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
                    extrasService: { pages: 4, languages: 2 },
                },
            ],
            priceBudget: 1140,
        },
    },
];