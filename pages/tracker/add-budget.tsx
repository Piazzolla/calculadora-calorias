import { AddIngredients } from "components/budget/AddIngredients";
import { BudgetSummary } from "components/budget/BudgetSummary";
import { BudgetProvider } from "context/budget";
import { NextPage } from "next"
import { BudgetEditLayout } from '../../layouts/BudgetEditLayout';

const AddBudget: NextPage = () => {
    return (
        <>
            <BudgetProvider>
                <BudgetEditLayout addIngredient={<AddIngredients />} summary={<BudgetSummary />}/>
            </BudgetProvider>
        </>
    )
}

export default AddBudget;

