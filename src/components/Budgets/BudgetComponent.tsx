import { useState } from "react";
import { BudgetInquiry } from "./AddBudget";
import { BudgetList } from "./BudgetList";
import { Budget, InquiryBudgetType } from "./Budget.types";
import { itemsFeaturesArray } from "../Features/itemsFeaturesArray";
import { useBudgetContext } from "./Context";

export const BudgetComponent = () => {
    const { featuresBudget, setFeaturesBudget, addBudget, setIsCheckedContext } = useBudgetContext();

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

        setNewInquiry({ //↓---para limpiar formulariooo---↓
            name: '',
            telephone: '',
            email: '',
            date: new Date().toLocaleDateString(),
        });
        setFeaturesBudget({
            services: [],
            priceBudget: 0,
            discountedBudget: false,
        });
        setIsCheckedContext(new Array(itemsFeaturesArray.length).fill(false));
    };

    return (
        <>
            <BudgetInquiry
                newInquiry={newInquiry}
                setNewInquiry={setNewInquiry}
                handleSubmit={handleSubmit}
            />
            <div className="border-t-2 border-dashed border-gray-300 mt-8 mb-10" />
            <BudgetList />
        </>
    )
};