export interface ItemFeature {
    name: string;
    description: string;
    discount: number;
    discountDescription: string;
    price: number;
    extras?: {
        pages: number;
        languages: number;
    }
}