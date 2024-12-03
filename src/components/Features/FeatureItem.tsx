import React from "react";
import { ItemFeatureProps } from "./Features.types";
import { Extras } from "./Extras";

export const FeatureItem: React.FC<ItemFeatureProps> = ({
    name,
    description,
    discountDescription,
    price,
    isChecked,
    index,
    handleOnChange,
    pagesCount,
    languagesCount,
    handleClickPlus,
    handleClickMinus
}) => {
    return (
        <div className='flex flex-col my-10 mx-64 p-10 border-2 border-gray-50 shadow-lg rounded-lg key={index}'>
            <div className="flex flex-row items-center justify-between">
                <div className='flex flex-col items-start'>
                    <h2 className='flex flex-row text-4xl font-bold text-gray-800'>{name}</h2>
                    <p className='flex flex-row font-semibold text-gray-800 pt-2'>{description}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='flex flex-row text-orange-400 font-semibold text-xl'>{discountDescription}</h4>
                    <h3 className='flex flex-row text-4xl font-extrabold text-gray-800 pt-2'>{price}</h3>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex flex-row">
                        <input
                            className="flex flex-col w-4 h-4 rounded"
                            type="checkbox"
                            id={`${index}-checkbox`}
                            name={name}
                            value={price}
                            checked={isChecked[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label
                            className="flex flex-col ms-2 text-sm text-gray-800 font-semibold"
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