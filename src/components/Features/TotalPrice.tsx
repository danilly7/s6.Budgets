import React from "react";
import { TotalPriceProps } from "./Features.types";
import { useBudgetContext } from "../Budgets/Context";

export const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => {
    const {isDiscounted} = useBudgetContext();

    return (
        <div className="flex flex-col items-end my-10 mx-80" aria-live="polite">
            <h2 className="text-3xl font-bold text-gray-800">Preu pressuposat:
                <span className="text-4xl font-extrabold text-gray-800 ms-7 me-2">{total}</span>€
            </h2>
            {isDiscounted
            ? <p className="text-orange-400 py-2">Amb el descompte del 20% aplicat!</p>
            : <p className=" pb-10"></p>
            }
        </div>
    )
};