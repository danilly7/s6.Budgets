import { useState } from "react"
import { itemsFeatures } from "./itemsFeatures";
import { ItemFeature } from "./itemFeature.type";

export const Features = () => {

    const [isChecked, setIsChecked] = useState(
        new Array(itemsFeatures.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const calculateTotalPrice = (updatedCheckedState: boolean[], itemsFeatures: ItemFeature[]) => {
        return updatedCheckedState.reduce((acc: number, currentCheckedState: boolean, index: number) => {
            return currentCheckedState ? acc + itemsFeatures[index].price : acc;
        }, 0);
    }

    const handleOnChange = (position: number) => {
        const updatedCheckedState = isChecked.map((item, index) =>
            index === position ? !item : item
        );

        setIsChecked(updatedCheckedState);

        const totalPrice = calculateTotalPrice(updatedCheckedState, itemsFeatures);

        setTotal(totalPrice);
    };

    return (
        <>
            {itemsFeatures.map(({ name, description, discountDescription, price }, index) => {
                return (
                    <div className='flex items-center justify-between my-10 mx-80 p-10 border-2 border-gray-50 shadow-lg rounded-lg'>
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
                )
            })}

            <div className="flex flex-col items-end my-10 mx-80">
                <h2 className="text-3xl font-bold text-gray-800">Preu pressuposat:
                    <span id="budget" className="text-4xl font-extrabold text-gray-800 ms-7 me-2">{total}</span>€
                </h2>
            </div>
        </>
    )
}