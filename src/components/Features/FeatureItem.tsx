import React from "react";
import { ItemFeatureProps } from "./Features.types";
import { Extras } from "./Extras";
import { useBudgetContext } from "../Budgets/Context";

export const FeatureItem: React.FC<ItemFeatureProps> = ({
    name,
    description,
    price,
    isChecked,
    index,
    handleOnChange,
    pagesCount,
    languagesCount,
    handleClickPlus,
    handleClickMinus
}) => {
    const {isDiscounted} = useBudgetContext();
    return (
        <div
            className={`flex flex-col mb-10 sm:mx-4 lg:mx-32 p-10 border-2 border-gray-50 shadow-lg rounded-lg w-full sm:w-auto focus:outline-none ${isChecked[index] ? 'ring-2 ring-teal-500' : ''}`}
            key={index}
        >
            <div className="flex flex-row items-center justify-between">
                <div className='flex flex-col items-start'>
                    <h2 className='text-4xl font-bold text-gray-800'>{name}</h2>
                    <p className='font-semibold text-gray-800 pt-2'>{description}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {isDiscounted
                    ? <h4 className='text-orange-400 font-semibold text-xl'>Estalvia el 20%</h4>
                    : <h4 className="pb-7"></h4>
                    }
                    <h3 className='text-4xl font-extrabold text-gray-800 pt-2'>{price}</h3>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex flex-row">
                        <input
                            className="w-4 h-4 rounded"
                            type="checkbox"
                            id={`${index}-checkbox`}
                            name={name}
                            value={price}
                            checked={isChecked[index]}
                            onChange={() => handleOnChange(index)}
                            aria-checked={isChecked[index] ? 'true' : 'false'}
                        />
                        <label
                            className="ms-2 text-sm sm:text-base text-gray-800 font-semibold"
                            htmlFor={`${index}-checkbox`}
                        >
                            Afegir
                        </label>
                    </div>
                </div>
            </div>
            {isChecked[index] && index === 2 && (
                <Extras
                    pagesCount={pagesCount}
                    languagesCount={languagesCount}
                    handleClickPlus={handleClickPlus}
                    handleClickMinus={handleClickMinus}
                />
            )}
        </div>
    )
};