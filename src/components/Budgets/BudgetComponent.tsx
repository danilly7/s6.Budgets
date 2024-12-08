import { useState } from "react";
import { BudgetInquiry } from "./AddBudget";
import { BudgetList } from "./BudgetList";
import { Budget, InquiryBudgetType } from "./Budget.types";
import { useBudgetContext } from "./Context";

export const BudgetComponent = () => {
    const { setInquiryBudget, featuresBudget, addBudget } = useBudgetContext();

    const [newInquiry, setNewInquiry] = useState<InquiryBudgetType>({
        name: '',
        telephone: '',
        email: '',
        date: new Date().toLocaleDateString(),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedInquiry: InquiryBudgetType = {
            ...newInquiry,
        };
        setNewInquiry(updatedInquiry);


        if (!updatedInquiry.name || !updatedInquiry.telephone || !updatedInquiry.email) {
            alert('Tots els camps són obligatoris.');
            return;
        }

        const finalBudget: Budget = {
            featuresBudget,
            inquiryBudget: updatedInquiry,
        };

        addBudget(finalBudget);
        console.log('finalBudget, este se activa con el click Sol·licitar pressupost', finalBudget);
    };

    return (
        <>
            <BudgetInquiry
                newInquiry={newInquiry}
                setInquiryBudget={setInquiryBudget}
                handleSubmit={handleSubmit}
            />
            <div className="border-t-2 border-dashed border-gray-300 mt-8 mb-10" />
            <BudgetList />
        </>
    )
};