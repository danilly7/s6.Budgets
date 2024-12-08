import React, { useState } from "react";
import BudgetContext from "./Context";
import { Budget, BudgetProviderProps, FeaturesBudgetType, InquiryBudgetType } from "./Budget.types";

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ budgetArr, children }) => {
    const [inquiryBudget, setInquiryBudget] = useState<InquiryBudgetType>({
        name: '',
        telephone: '',
        email: '',
        date: ''
    })
    const [featuresBudget, setFeaturesBudget] = useState<FeaturesBudgetType>({
        services: [],
        priceBudget: 0
    });
    const [budgets, setBudgets] = useState<Budget[]>(budgetArr);

    const addBudget = (newBudget: Budget) => {
        console.log("Adding budget:", newBudget);
        setBudgets(prevBudgets => {
            const updatedBudgets = [...prevBudgets, newBudget];
            console.log('Updated Budgets:', updatedBudgets);
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
        }}>
            {children}
        </BudgetContext.Provider>
    );
};