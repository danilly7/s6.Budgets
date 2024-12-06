import { Banner } from "../components/Banner";
import { BudgetComponent } from "../components/Budgets/BudgetComponent";
import { FeaturesComponent } from "../components/Features/FeaturesComponent";
import { Switch } from "../components/Switch";


export const FeaturesPage = () => {
    return (
        <>
            <Banner />
            <Switch />
            <FeaturesComponent />
            <BudgetComponent />
        </>
    )
} 