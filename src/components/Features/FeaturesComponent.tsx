import { useState } from "react";
import { itemsFeaturesArray } from "./itemsFeaturesArray";
import { ItemFeature } from "./Features.types";
import { Service } from "../Budgets/Budget.types";
import { FeatureItem } from "./FeatureItem";
import { TotalPrice } from "./TotalPrice";
import { useBudgetContext } from "../Budgets/Context";

export const FeaturesComponent = () => {
    const { setFeaturesBudget } = useBudgetContext();

    const [isChecked, setIsChecked] = useState<boolean[]>(new Array(itemsFeaturesArray.length).fill(false));
    const [pagesCount, setPagesCount] = useState<number>(0);
    const [languagesCount, setLanguagesCount] = useState<number>(0);
    const [localPriceBudget, setLocalPriceBudget] = useState<number>(0);

    const handleOnChange = (position: number) => {
        const updatedCheckedState = isChecked.map((item, index) =>
            index === position ? !item : item
        );
        setIsChecked(updatedCheckedState);

        const totalPrice = calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, pagesCount, languagesCount);
        setLocalPriceBudget(totalPrice);

        if (!updatedCheckedState[2]) {
            setPagesCount(0);
            setLanguagesCount(0);
            setLocalPriceBudget(calculateTotalPrice(updatedCheckedState, itemsFeaturesArray, 0, 0));
        };

        const newFeaturesBudget = {
            priceBudget: totalPrice,
            services: updatedCheckedState
                .map((isSelected, index) => {
                    if (isSelected) {
                        const item = itemsFeaturesArray[index];
                        return {
                            nameService: item.name,
                            priceService: item.price,
                            discountService: item.discount ?? undefined,
                            extrasService: index === 2
                                ? { pages: pagesCount, languages: languagesCount }
                                : undefined,
                        } as Service;
                    }
                    return null;
                })
                .filter((service): service is Service => service !== null),
        };

        setFeaturesBudget(newFeaturesBudget);
    };

    const handleClickPlus = (type: 'pages' | 'languages') => {
        if (type === 'pages') {
            setPagesCount(prevPagesCount => {
                const newPagesCount = prevPagesCount + 1;
                setLocalPriceBudget(calculateTotalPrice(isChecked, itemsFeaturesArray, newPagesCount, languagesCount));
                return newPagesCount;
            });
        } else if (type === 'languages') {
            setLanguagesCount(prevLanguagesCount => {
                const newLanguagesCount = prevLanguagesCount + 1;
                setLocalPriceBudget(calculateTotalPrice(isChecked, itemsFeaturesArray, pagesCount, newLanguagesCount));
                return newLanguagesCount;
            });
        }
    };

    const handleClickMinus = (type: 'pages' | 'languages') => {
        if (type === 'pages' && pagesCount > 0) {
            setPagesCount(prevPagesCount => {
                const newPagesCount = prevPagesCount - 1;
                setLocalPriceBudget(calculateTotalPrice(isChecked, itemsFeaturesArray, newPagesCount, languagesCount));
                return newPagesCount;
            });
        } else if (type === 'languages' && languagesCount > 0) {
            setLanguagesCount(prevLanguagesCount => {
                const newLanguagesCount = prevLanguagesCount - 1;
                setLocalPriceBudget(calculateTotalPrice(isChecked, itemsFeaturesArray, pagesCount, newLanguagesCount));
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

        const totalBeforeDiscount = featuresCost + extraCost;

        const totalDiscount = 0;
        // const totalDiscount = updatedCheckedState.reduce((acc: number, currentCheckedState: boolean, index: number) => {
        //     if (currentCheckedState && itemsFeatures[index].discount) {
        //         const discountAmount = totalBeforeDiscount * (itemsFeatures[index].discount / 100);
        //         return acc + discountAmount;
        //     }
        //     return acc;
        // }, 0);

        return totalBeforeDiscount - totalDiscount;
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
            <TotalPrice total={localPriceBudget} />
        </>
    );
};