import { useEffect, useState } from "react";
import { itemsFeaturesArray } from "./itemsFeaturesArray";
import { ItemFeature } from "./Features.types";
import { Service } from "../Budgets/Budget.types";
import { FeatureItem } from "./FeatureItem";
import { TotalPrice } from "./TotalPrice";
import { useBudgetContext } from "../Budgets/Context";

export const FeaturesComponent = () => {
    const { setFeaturesBudget, isCheckedContext, setIsCheckedContext, isDiscounted } = useBudgetContext();

    const [pagesCount, setPagesCount] = useState<number>(0);
    const [languagesCount, setLanguagesCount] = useState<number>(0);
    const [localPriceBudget, setLocalPriceBudget] = useState<number>(0);

    const calculateTotalPrice = (
        updatedCheckedState: boolean[],
        itemsFeatures: ItemFeature[],
        pagesCount: number,
        languagesCount: number
    ) => {
        const featuresCost = updatedCheckedState.reduce((acc: number, currentCheckedState: boolean, index: number) => {
            return currentCheckedState ? acc + itemsFeatures[index].price : acc;
        }, 0);

        const extraCost = updatedCheckedState[2] ? (pagesCount + languagesCount) * 30 : 0;

        return featuresCost + extraCost;
    };

    useEffect(() => {
        const updatedCheckedState = isCheckedContext;

        if (updatedCheckedState[2] === false) {
            setPagesCount(0);
            setLanguagesCount(0);
        };

        const totalPrice = isDiscounted
            ? calculateTotalPrice(isCheckedContext, itemsFeaturesArray, pagesCount, languagesCount) * 0.8
            : calculateTotalPrice(isCheckedContext, itemsFeaturesArray, pagesCount, languagesCount);
        setLocalPriceBudget(totalPrice);

        const newFeaturesBudget = {
            services: updatedCheckedState
                .map((isSelected, index) => {
                    if (isSelected) {
                        const item = itemsFeaturesArray[index];
                        return {
                            nameService: item.name,
                            priceService: item.price,
                            extrasService: index === 2
                                ? { pages: pagesCount, languages: languagesCount }
                                : undefined,
                        } as Service;
                    }
                    return null;
                })
                .filter((service): service is Service => service !== null),
            priceBudget: totalPrice,
            discountedBudget: isDiscounted,
        };

        setFeaturesBudget(newFeaturesBudget);
    }, [pagesCount, languagesCount, isCheckedContext, setFeaturesBudget, isDiscounted]);

    const handleOnChange = (position: number) => {
        const updatedCheckedState = isCheckedContext.map((item, index) =>
            index === position ? !item : item
        );
        setIsCheckedContext(updatedCheckedState);

        if (position === 2 && updatedCheckedState[2] === false) {
            setPagesCount(0);
            setLanguagesCount(0);
        }
    };
    const handleClickPlus = (type: 'pages' | 'languages') => {
        if (type === 'pages') {
            setPagesCount(prevPagesCount => prevPagesCount + 1);
        } else if (type === 'languages') {
            setLanguagesCount(prevLanguagesCount => prevLanguagesCount + 1);
        }
    };

    const handleClickMinus = (type: 'pages' | 'languages') => {
        if (type === 'pages' && pagesCount > 0) {
            setPagesCount(prevPagesCount => prevPagesCount - 1);
        } else if (type === 'languages' && languagesCount > 0) {
            setLanguagesCount(prevLanguagesCount => prevLanguagesCount - 1);
        }
    };

    return (
        <>
            {itemsFeaturesArray.map(({ name, description, price }, index) => (
                <FeatureItem
                    key={index}
                    name={name}
                    description={description}
                    price={price}
                    isChecked={isCheckedContext}
                    index={index}
                    handleOnChange={handleOnChange}
                    pagesCount={pagesCount}
                    languagesCount={languagesCount}
                    handleClickPlus={handleClickPlus}
                    handleClickMinus={handleClickMinus}
                />
            ))}
            <TotalPrice
                total={localPriceBudget}
            />
        </>
    );
};