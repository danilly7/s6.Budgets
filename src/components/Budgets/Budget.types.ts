import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

export interface Budget {
    inquiryBudget: InquiryBudgetType;
    featuresBudget: FeaturesBudgetType;    
};

export interface InquiryBudgetType {
    name: string;
    telephone: string;
    email: string;
    date: string;
}

export interface FeaturesBudgetType {
    services: Service[];
    priceBudget: number;
}

export interface Service {
    nameService: string;
    discountService?: number;
    priceService: number;
    extrasService?: {
        pages?: number;
        languages?: number;
    };
};

export interface BudgetContextType {
    inquiryBudget: InquiryBudgetType;
    featuresBudget: FeaturesBudgetType;
    setInquiryBudget: Dispatch<SetStateAction<InquiryBudgetType>>;
    setFeaturesBudget: Dispatch<SetStateAction<FeaturesBudgetType>>;
    addBudget: (newBudget: Budget) => void;
    budgets: Budget[];
    setBudgets: Dispatch<SetStateAction<Budget[]>>;
};

export interface BudgetProviderProps {
    budgetArr: Budget[];
    children: ReactNode;
};

export interface BudgetInquiryProps {
    newInquiry: InquiryBudgetType;
    setInquiryBudget: React.Dispatch<React.SetStateAction<InquiryBudgetType>>;
    handleSubmit: (e: React.FormEvent) => void;
}