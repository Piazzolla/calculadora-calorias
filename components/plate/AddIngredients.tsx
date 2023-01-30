import React, { useContext, useState } from 'react';
import { Autocomplete } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { Ingredient } from "interfaces/Ingredient";
import initialData from '../../data/initial-data';
import { PlateContext } from '../../context/plate/PlateContext';
import { SelectedIngredient } from '../../interfaces/SelectedIngredient';


export const AddIngredients = () => {

    const ingNames = initialData.map(ingredient => ingredient.name);

    const [ingredientSelectedName, setIngredientSelectedName] = useState<string | null>('');

    const { plate, addIngredientToPlate } = useContext(PlateContext);

    const handleAddIngredientToPlate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!ingredientSelectedName) return;
        const ingObj = initialData.filter(i => i.name === ingredientSelectedName)[0];
//TODO: chequear no repetir nombre de ingrediente        if(plate.includes({ingObj})) return;
        const selectedIngredient:SelectedIngredient = {ingredient: ingObj, qty: 0, unit: 'gr'}  //TODO: qty
        addIngredientToPlate(selectedIngredient);

    }



    return (
        <>
            <div>AddIngredients</div>
            <form onSubmit={handleAddIngredientToPlate}>
                <div>
                    <TextField id="qty-input" label="Cantidad" type={"number"} />
                    <Autocomplete
                        disablePortal
                        id="units-select"
                        options={["gr"]}
                        defaultValue={"gr"}
                        disabled
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="units" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="ingredients-select"
                        options={ingNames}
                        sx={{ width: 300 }}
                        onChange={(event, value: (string | null)) => setIngredientSelectedName(value)}
                        renderInput={(params) => <TextField {...params} label="Ingredientes" />
                        }
                    />
                    <Button
                        type="submit"
                    ><CheckIcon /></Button>
                </div>
            </form>
            <br />

            {/* lista de ingredientes agregados */}
            <ul>
                {
                    plate? 
                    (plate.map(selectedIngredient => { 
                        return <li key={selectedIngredient.ingredient.name}>{selectedIngredient.ingredient.name} - {selectedIngredient.ingredient.baseQuantity.quantity} {selectedIngredient.ingredient.baseQuantity.unit}</li>
                    } ))
                    : null
                }
            </ul>
        </>
    )
}
