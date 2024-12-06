import { BudgetInquiry } from "./BudgetInquiry";
import { BudgetFilter } from "./BudgetFilter";

export const BudgetComponent = () => {


    return (
        <>
            <BudgetInquiry />
            <div className="border-t-2 border-dashed border-gray-300 mt-8 mb-10" />
            <BudgetFilter />
        </>
    )
};