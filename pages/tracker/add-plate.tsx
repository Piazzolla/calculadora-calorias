import { AddIngredients } from "components/plate/AddIngredients";
import { PlateSummary } from "components/plate/PlateSummary";
import { PlateProvider } from "context/plate";
import { NextPage } from "next"

const AddPlatePage: NextPage = () => {
    return (
        <>
            <PlateProvider>
                <AddIngredients />
                <PlateSummary />
            </PlateProvider>
        </>
    )
}

export default AddPlatePage;

