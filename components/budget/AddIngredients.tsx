import React, { useContext, useState } from 'react';
import { Autocomplete, Box } from '@mui/material';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import initialData from '../../data/initial-data';
import { useForm, SubmitHandler } from "react-hook-form";
import { BudgetContext } from '../../context/budget/BudgetContext';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';


type FormIngredient = {
    qty: number,
    unit: string,
    ingredientName: string
};


export const AddIngredients = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormIngredient>();

    const ingNames = initialData.map(ingredient => ingredient.name);

    const [ingredientSelectedName, setIngredientSelectedName] = useState<string | null>('');

    const { budget, addIngredientToBudget } = useContext(BudgetContext);


    //   const onSubmit: SubmitHandler<Inputs> = data => console.log(data);



    const handleAddIngredientToBudget = (formIngredient: FormIngredient) => {
        console.log(JSON.stringify(formIngredient));
        //   event.preventDefault();
        if (!ingredientSelectedName) return;
        const ingObj = initialData.filter(i => i.name === ingredientSelectedName)[0];

        const selectedIngredient: SelectedIngredient = {
            ingredient: ingObj,
            qty: formIngredient.qty,
            unit: "gr"//formIngredient.unit
        }
        //TODO: chequear no repetir nombre de ingrediente        if(plate.includes({ingObj})) return;
        //   const selectedIngredient:SelectedIngredient = {ingredient: ingObj, qty: 0, unit: 'gr'}  //TODO: qty
        addIngredientToBudget(selectedIngredient);

    }



    return (
        <>
            <Box className='add-ingredient-view'>
                <h3 className='add-ingredient-title'>Add Ingredients To Budget</h3>
                <form /*onSubmit={handleAddIngredientToPlate}>*/ onSubmit={handleSubmit(handleAddIngredientToBudget)}>

                    <TextField id="qty-input" label="Quantity" {...register("qty")} type={"number"} className='add-ingredient-form-field' />
                    <Autocomplete
                        disablePortal
                        id="units-select"
                        options={["gr"]}
                        defaultValue={"gr"}
                        value={"gr"}
                        //  disabled
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...register("unit")} {...params} label="units" className='add-ingredient-form-field' />}
                    />
                    <Autocomplete
                        disablePortal
                        id="ingredients-select"
                        options={ingNames}
                        sx={{ width: 300 }}

                        onChange={(event, value: (string | null)) => setIngredientSelectedName(value)}
                        renderInput={(params) => <TextField {...register("ingredientName")} {...params} label="Ingredients" className='add-ingredient-form-field' />
                        }
                    />
                    <Box className='add-ingredient-submit-box'>
                        <Button
                            className='add-ingredient-submit-button'
                            type="submit"
                        ><CheckIcon className='add-ingredient-check-icon' /></Button>
                    </Box>
                </form>
                {/* <br /> */}
            </Box>

            <Box className='added-ingredient-list-box'>
                {/* lista de ingredientes agregados */}
                <ul>
                    {
                        budget ?
                            (budget.map(selectedIngredient => {
                                return <li className='added-ingredient-list-item' key={selectedIngredient.ingredient.name}>{selectedIngredient.ingredient.name}: {selectedIngredient.qty} {selectedIngredient.unit}</li>
                            }))
                            : null
                    }
                </ul>
            </Box>
        </>
    )
}
