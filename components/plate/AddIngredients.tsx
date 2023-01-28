import { useContext, useState } from 'react';
import { Autocomplete } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { Ingredient } from "interfaces/Ingredient";
import initialData from '../../data/initial-data';
import { PlateContext } from '../../context/plate/PlateContext';


export const AddIngredients = () => {

    const ingNames = initialData.map(ingredient => ingredient.name);

    const [ingredientSelectedName, setIngredientSelectedName] = useState<string | null>('');

    const { plate, addIngredientToPlate } = useContext(PlateContext);

    const handleAddIngredientToPlate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!ingredientSelectedName) return;
        const ingObj = initialData.filter(i => i.name === ingredientSelectedName)[0];
        if(plate.includes(ingObj)) return;
        addIngredientToPlate(ingObj);

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
                    (plate.map(ingredient => { 
                        return <li key={ingredient.name}>{ingredient.name} - {ingredient.baseQuantity.quantity} {ingredient.baseQuantity.unit}</li>
                    } ))
                    : null
                }
            </ul>

            <Button><AddIcon /></Button>
        </>
    )
}
