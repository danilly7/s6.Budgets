export interface Budget {
    inquiryNum: number;
    name: string;
    telephone: number;
    email: string;
    services: {
        nameService: string;
        discountService?: number;
        priceService: number;
        extrasService?: {
            pages: number;
            languages: number;
        }[];
    }[];
    totalBudget: number;
    date: Date;
};