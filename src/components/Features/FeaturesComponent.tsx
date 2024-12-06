import { useState } from "react";
import { itemsFeaturesArray } from "./itemsFeaturesArray";
import { ItemFeature } from "./Features.types";
import { FeatureItem } from "./FeatureItem";
import { TotalPrice } from "./TotalPrice";

export const FeaturesComponent = () => {
    const [isChecked, setIsChecked] = useState<boolean[]>(new Array(itemsFeaturesArray.length).fill(false));
    const [total, setTotal] = useState(0);
    const [pagesCount, setPagesCount] = useState(0);
    const [languagesCount, setLanguagesCount] = useState(0);

    const handleOnChange = (position: number) => {
        const updatedCheckedState = isChecked.map((item, index) =>
            index === position ? !item : item
        );
        setIsChecked(updatedCheckedState);

        const totalPrice = calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, pagesCount, languagesCount);
        setTotal(totalPrice);

        if (!updatedCheckedState[2]) {
            setPagesCount(0);
            setLanguagesCount(0);
            setTotal(calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, 0, 0));
        }
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
                    isChecked={isChecked}
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