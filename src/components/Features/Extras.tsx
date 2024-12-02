import React from "react";
import { ExtrasProps } from "./Features.types";

export const Extras: React.FC<ExtrasProps> = ({ pagesCount, languagesCount, handleClickPlus, handleClickMinus }) => {
    console.log(pagesCount, languagesCount);
    return (
        <div className="flex flex-row mt-8 w-full justify-end">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row items-center gap-4 justify-end">
                    <p className="text-right w-full">Nombre de pàgines:</p>
                    <button
                        className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickMinus('pages')}>
                        -
                    </button>
                    <span className="font-semibold border border-gray-300 rounded-lg w-14 h-7 flex items-center justify-center">
                        {pagesCount}
                    </span>
                    <button className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickPlus('pages')}>
                        +
                    </button>
                </div>
                <div className="flex flex-row items-center gap-4 justify-end">
                    <p className="text-right w-full">Nombre de llenguatges:</p>
                    <button
                        className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickMinus('languages')}>
                        -
                    </button>
                    <span className="font-semibold border border-gray-300 rounded-lg w-14 h-7 flex items-center justify-center">
                        {languagesCount}
                    </span>
                    <button className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickPlus('languages')}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}