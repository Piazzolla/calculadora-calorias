import { AddIngredients } from "components/budget/AddIngredients";
import { BudgetSummary } from "components/budget/BudgetSummary";
import { PlateProvider } from "context/plate";
import { NextPage } from "next"
import { BudgetEditLayout } from '../../layouts/BudgetEditLayout';

const AddPlatePage: NextPage = () => {
    return (
        <>
            <PlateProvider>
                <BudgetEditLayout addIngredient={<AddIngredients />} summary={<BudgetSummary />}/>
            </PlateProvider>
        </>
    )
}

export default AddPlatePage;

