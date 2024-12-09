import React, { useState } from "react";
import BudgetContext from "./Context";
import { Budget, BudgetProviderProps, FeaturesBudgetType, InquiryBudgetType } from "./Budget.types";
import { itemsFeaturesArray } from "../Features/itemsFeaturesArray";

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ budgetArr, children }) => {
    const [inquiryBudget, setInquiryBudget] = useState<InquiryBudgetType>({
        name: '',
        telephone: '',
        email: '',
        date: ''
    })

    const [featuresBudget, setFeaturesBudget] = useState<FeaturesBudgetType>({
        services: [],
        priceBudget: 0,
        discountedBudget: false,
    });

    const [isCheckedContext, setIsCheckedContext] = useState<boolean[]>(new Array(itemsFeaturesArray.length).fill(false));

    const [budgets, setBudgets] = useState<Budget[]>(budgetArr);

    const [isDiscounted, setIsDiscounted] = useState<boolean>(false); 
    const toggleDiscount = () => setIsDiscounted(prevState => !prevState);

    const addBudget = (newBudget: Budget) => {
        setBudgets(prevBudgets => {
            const updatedBudgets = [...prevBudgets, newBudget];
            return updatedBudgets;
        });
    };

    return (
        <BudgetContext.Provider value={{
            inquiryBudget,
            featuresBudget,
            setInquiryBudget,
            setFeaturesBudget,
            addBudget,
            budgets,
            setBudgets,
            isCheckedContext,
            setIsCheckedContext,
            isDiscounted,
            setIsDiscounted,
            toggleDiscount,
        }}>
            {children}
        </BudgetContext.Provider>
    );
};