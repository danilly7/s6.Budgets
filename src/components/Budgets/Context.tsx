import { createContext, useContext } from "react";
import { BudgetContextType } from "./Budget.types";

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const useBudgetContext = () => {
    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error('useBudgetContext must be used within a BudgetProvider');
    }
    return context;
};

export default BudgetContext;