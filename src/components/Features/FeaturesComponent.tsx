import { useState } from "react";
import { itemsFeaturesArray } from "./itemsFeaturesArray";
import { ItemFeature } from "./Features.types";
import { FeatureItem } from "./Feature";
import { TotalPrice } from "./TotalPrice";

export const Features = () => {

    const [isChecked, setIsChecked] = useState<boolean[]>(new Array(itemsFeaturesArray.length).fill(false));
    const [total, setTotal] = useState(0);
    // const [showExtras, setShowExtras] = useState(false);
    const [pagesCount, setPagesCount] = useState(0);
    const [languagesCount, setLanguagesCount] = useState(0);

    const handleOnChange = (position: number) => {
        const updatedCheckedState = isChecked.map((item, index) =>
            index === position ? !item : item
        );
        console.log('Updated isChecked', updatedCheckedState)
        setIsChecked(updatedCheckedState);

        const totalPrice = calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, pagesCount, languagesCount);
        setTotal(totalPrice);

        if (!updatedCheckedState[position]) {
            setPagesCount(0);
            setLanguagesCount(0);
            setTotal(calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, 0, 0));
        }

        // if (position === 2) {
        //     setShowExtras(updatedCheckedState[2]);
        //     if (!updatedCheckedState[2]) {
        //         setPagesCount(0);
        //         setLanguagesCount(0);
        //         setTotal(calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, 0, 0));
        //     }
        // }
    };

    const handleClickPlus = (type: 'pages' | 'languages') => {
        if (type === 'pages') {
            setPagesCount(prevPagesCount => {
                const newPagesCount = prevPagesCount + 1;
                setTotal(calculateTotalPrice(isChecked, itemsFeaturesArray, newPagesCount, languagesCount));
                return newPagesCount;
            });
        } else if (type === 'languages') {
            setLanguagesCount(prevLanguagesCount => {
                const newLanguagesCount = prevLanguagesCount + 1;
                setTotal(calculateTotalPrice(isChecked, itemsFeaturesArray, pagesCount, newLanguagesCount));
                return newLanguagesCount;
            });
        }
    };

    const handleClickMinus = (type: 'pages' | 'languages') => {
        if (type === 'pages' && pagesCount > 0) {
            setPagesCount(prevPagesCount => {
                const newPagesCount = prevPagesCount - 1;
                setTotal(calculateTotalPrice(isChecked, itemsFeaturesArray, newPagesCount, languagesCount));
                return newPagesCount;
            });
        } else if (type === 'languages' && languagesCount > 0) {
            setLanguagesCount(prevLanguagesCount => {
                const newLanguagesCount = prevLanguagesCount - 1;
                setTotal(calculateTotalPrice(isChecked, itemsFeaturesArray, pagesCount, newLanguagesCount));
                return newLanguagesCount;
            });
        }
    };

    const calculateTotalPrice = (
        updatedCheckedState: boolean[],
        itemsFeatures: ItemFeature[],
        pagesCount: number,
        languagesCount: number
    ) => {
        const featuresCost = updatedCheckedState.reduce((acc: number, currentCheckedState: boolean, index: number) => {
            return currentCheckedState ? acc + itemsFeatures[index].price : acc;
        }, 0);

        const extraCost = (pagesCount + languagesCount) * 30;

        return featuresCost + extraCost;
    };

    return (
        <>
            {itemsFeaturesArray.map(({ name, description, discountDescription, price }, index) => (
                <FeatureItem
                    key={index}
                    name={name}
                    description={description}
                    discountDescription={discountDescription}
                    price={price}
                    isChecked={isChecked[index]}
                    index={index}
                    handleOnChange={handleOnChange}
                    pagesCount={pagesCount}
                    languagesCount={languagesCount}
                    handleClickPlus={handleClickPlus}
                    handleClickMinus={handleClickMinus}
                />
            ))}
            <TotalPrice total={total} />
        </>
    );
};

// <>
//     {itemsFeaturesArray.map(({ name, description, discountDescription, price }, index) => {
//         return (
//             <div className='flex flex-col my-10 mx-64 p-10 border-2 border-gray-50 shadow-lg rounded-lg key={index}'>
//                 <div className="flex flex-row items-center justify-between">
//                     <div className='flex flex-col items-start'>
//                         <h2 className='flex flex-row text-4xl font-bold text-gray-800'>{name}</h2>
//                         <p className='flex flex-row font-semibold text-gray-800 pt-2'>{description}</p>
//                     </div>
//                     <div className='flex flex-col items-center justify-center'>
//                         <h4 className='flex flex-row text-orange-400 font-semibold text-xl'>{discountDescription}</h4>
//                         <h3 className='flex flex-row text-4xl font-extrabold text-gray-800 pt-2'>{price}</h3>
//                     </div>
//                     <div className="flex flex-col items-end">
//                         <div className="flex flex-row">
//                             <input
//                                 className="flex flex-col w-4 h-4 rounded"
//                                 type="checkbox"
//                                 id={`${index}-checkbox`}
//                                 name={name}
//                                 value={price}
//                                 checked={isChecked[index]}
//                                 onChange={() => handleOnChange(index)}
//                             />
//                             <label
//                                 className="flex flex-col ms-2 text-sm text-gray-800 font-semibold"
//                                 htmlFor={`${index}-checkbox`}
//                             >
//                                 Afegir
//                             </label>
//                         </div>
//                     </div>
//                 </div>
//                 {showExtras === true && index === 2 && (
//                     <div className="flex flex-row mt-8 w-full justify-end">
//                         <div className="flex flex-col gap-4 w-full">
//                             <div className="flex flex-row items-center gap-4 justify-end">
//                                 <p className="text-right w-full">Nombre de pàgines:</p>
//                                 <button
//                                     className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
//                                     onClick={() => handleClickMinus('pages')}>
//                                     -
//                                 </button>
//                                 <span className="font-semibold border border-gray-300 rounded-lg w-14 h-7 flex items-center justify-center">
//                                     {pagesCount}
//                                 </span>
//                                 <button className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
//                                     onClick={() => handleClickPlus('pages')}>
//                                     +
//                                 </button>
//                             </div>
//                             <div className="flex flex-row items-center gap-4 justify-end">
//                                 <p className="text-right w-full">Nombre de llenguatges:</p>
//                                 <button
//                                     className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
//                                     onClick={() => handleClickMinus('languages')}>
//                                     -
//                                 </button>
//                                 <span className="font-semibold border border-gray-300 rounded-lg w-14 h-7 flex items-center justify-center">
//                                     {languagesCount}
//                                 </span>
//                                 <button className="text-sm text-gray-400 border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500"
//                                     onClick={() => handleClickPlus('languages')}>
//                                     +
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         )
//     })}

//     <div className="flex flex-col items-end my-10 mx-80">
//         <h2 className="text-3xl font-bold text-gray-800">Preu pressuposat:
//             <span id="budget" className="text-4xl font-extrabold text-gray-800 ms-7 me-2">{total}</span>€
//         </h2>
//     </div>
// </>