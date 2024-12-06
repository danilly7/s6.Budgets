import React from "react";
import { TotalPriceProps } from "./Features.types";

export const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => {
    return (
        <div className="flex flex-col items-end my-10 mx-80" aria-live="polite">
            <h2 className="text-3xl font-bold text-gray-800">Preu pressuposat:
                <span className="text-4xl font-extrabold text-gray-800 ms-7 me-2">{total}</span>€
            </h2>
        </div>
    )
}