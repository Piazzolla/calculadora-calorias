import { useContext } from "react";
import { PlateContext } from '../../context/plate/PlateContext';

export const PlateSummary = () => {

    const { plate, addIngredientToPlate } = useContext(PlateContext);

    const addUpCallback = (a: number, b: number) => {
        return (a + b);
    }

    // const carbs = plate.map(ingredient => ingredient.carbs).reduce(addUpCallback) || 0;
    // const fat = plate.map(ingredient => ingredient.fat).reduce(addUpCallback) || 0;
    // const protein = plate.map(ingredient => ingredient.protein).reduce(addUpCallback) || 0;


    return (
        <>
            <div>PlateSummary:</div>
            {
                plate.length ?
                    (<>
                        <h1>Total Carbs: {plate!.map(ingredient => ingredient.carbs).reduce(addUpCallback)}</h1>
                        <h1>Total Fat: {plate!.map(ingredient => ingredient.fat).reduce(addUpCallback)}</h1>
                        <h1>Total Protein: {plate!.map(ingredient => ingredient.protein).reduce(addUpCallback)}</h1>
                    </>)
                    : null

            }
        </>

    )
}
