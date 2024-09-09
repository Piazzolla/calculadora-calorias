import { AddIngredients } from "components/budget/add-ingredients";
import { BudgetSummary } from "components/budget/budget-summary";
import { BudgetProvider } from "context/budget";
import { NextPage } from "next"
import { BudgetEditLayout } from '../../layouts/budget-edit-layout';

const AddBudget: NextPage = () => {
    return (
        <>

                <BudgetEditLayout addIngredient={<AddIngredients />} summary={<BudgetSummary />}/>
        </>
    )
}

export default AddBudget;

