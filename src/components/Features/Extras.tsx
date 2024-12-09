import React from "react";
import { ExtrasProps } from "./Features.types";
import { ModalPages } from "../Modals/ModalPages";
import { ModalLanguages } from "../Modals/ModalLanguages";

export const Extras: React.FC<ExtrasProps> = ({ pagesCount, languagesCount, handleClickPlus, handleClickMinus }) => {

    return (
        <div className="flex flex-row mt-8 w-full justify-end">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row items-center gap-4 justify-end">
                    <ModalPages />
                    <p className="text-right">Número de pàgines:</p>
                    <button
                        className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickMinus('pages')}
                        aria-label="Decrementar número de páginas">
                        -
                    </button>
                    <span className="font-semibold border border-gray-300 rounded-lg w-14 h-7 flex items-center justify-center">
                        {pagesCount}
                    </span>
                    <button className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickPlus('pages')}
                        aria-label="Incrementar número de páginas">
                        +
                    </button>
                </div>
                <div className="flex flex-row items-center gap-4 justify-end">
                    <ModalLanguages />
                    <p className="text-right">Número de llengües:</p>
                    <button
                        className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickMinus('languages')}
                        aria-label="Decrementar número de páginas">
                        -
                    </button>
                    <span className="font-semibold border border-gray-300 rounded-lg w-14 h-7 flex items-center justify-center">
                        {languagesCount}
                    </span>
                    <button className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
                        onClick={() => handleClickPlus('languages')}
                        aria-label="Incrementar número de páginas">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
};