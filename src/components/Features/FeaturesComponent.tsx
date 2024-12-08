import { useEffect, useState } from "react";
import { itemsFeaturesArray } from "./itemsFeaturesArray";
import { ItemFeature } from "./Features.types";
import { Service } from "../Budgets/Budget.types";
import { FeatureItem } from "./FeatureItem";
import { TotalPrice } from "./TotalPrice";
import { useBudgetContext } from "../Budgets/Context";

export const FeaturesComponent = () => {
    const { setFeaturesBudget, isCheckedContext, setIsCheckedContext } = useBudgetContext();

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

    useEffect(() => {
        const updatedCheckedState = isCheckedContext;

        if (updatedCheckedState[2] === false) {
            setPagesCount(0);
            setLanguagesCount(0);
        };

        const totalPrice = calculateTotalPrice(isCheckedContext, itemsFeaturesArray, pagesCount, languagesCount);
        setLocalPriceBudget(totalPrice);

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
    }, [pagesCount, languagesCount, isCheckedContext, setFeaturesBudget]);

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
            {itemsFeaturesArray.map(({ name, description, discountDescription, price }, index) => (
                <FeatureItem
                    key={index}
                    name={name}
                    description={description}
                    discountDescription={discountDescription}
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
            <TotalPrice total={localPriceBudget} />
        </>
    );
};