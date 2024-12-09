export interface ItemFeature {
    name: string;
    description: string;
    price: number;
    extras?: {
        pages: number;
        languages: number;
    }
}

export type ItemFeatureProps = ItemFeature & {
    isChecked: boolean[];
    index: number;
    handleOnChange: (index: number) => void;
    pagesCount: number;
    languagesCount: number;
    handleClickPlus: (type: 'pages' | 'languages') => void;
    handleClickMinus: (type: 'pages' | 'languages') => void;
};

export type ExtrasProps = {
    pagesCount: number;
    languagesCount: number;
    handleClickPlus: (type: 'pages' | 'languages') => void;
    handleClickMinus: (type: 'pages' | 'languages') => void;
}

export type TotalPriceProps = {
    total: number;
};