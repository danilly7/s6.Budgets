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
    discountedBudget: boolean;
}

export interface Service {
    nameService: string;
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
    isCheckedContext: boolean[];
    setIsCheckedContext: React.Dispatch<React.SetStateAction<boolean[]>>;
    isDiscounted: boolean;
    setIsDiscounted: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDiscount: () => void;
};

export interface BudgetProviderProps {
    budgetArr: Budget[];
    children: ReactNode;
};

export interface BudgetInquiryProps {
    newInquiry: InquiryBudgetType;
    setNewInquiry: React.Dispatch<React.SetStateAction<InquiryBudgetType>>;
    handleSubmit: (e: React.FormEvent) => void;
};