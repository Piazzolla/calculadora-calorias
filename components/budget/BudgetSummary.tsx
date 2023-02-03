import { useContext, useEffect, useState } from 'react';
import { PlateContext } from '../../context/plate/PlateContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

export const BudgetSummary = () => {

    const { plate, totalGrOfCarbs, totalGrOfFats, totalGrOfProtein, totalCalories } = useContext(PlateContext);

    const [showCalories, setShowCalories] = useState(false);
    // const addUpCallback = (a: number, b: number) => {
    //     return (a + b);
    // }

    // const carbs = plate.map(ingredient => ingredient.carbs).reduce(addUpCallback) || 0;
    // const fat = plate.map(ingredient => ingredient.fat).reduce(addUpCallback) || 0;
    // const protein = plate.map(ingredient => ingredient.protein).reduce(addUpCallback) || 0;

    // useEffect(() => {
    //     if (!plate.length) return;
    //     setCarbs(plate.map(ingredient => ingredient.carbs).reduce(addUpCallback));
    //     setFats(plate.map(ingredient => ingredient.fat).reduce(addUpCallback));
    //     setProtein(plate.map(ingredient => ingredient.protein).reduce(addUpCallback));
    // }, [plate])

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCalories(event.currentTarget.checked);
      };

    return (
        <>
            <div>PlateSummary:</div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        checked={showCalories}
                        control={<Switch onChange={ (e) => handleSwitchChange(e) } color="primary" />}
                        label={ showCalories? "Calorias" : "Gramos"}
                        labelPlacement="bottom"
                    />
                </FormGroup>
            </FormControl>
            {
                plate.length ?
                    (<>
                        <h1>Total Carbs: {totalGrOfCarbs * (showCalories ? 4 : 1)} { showCalories? "Calorias" : "Gramos"}</h1>
                        <h1>Total Fat: {totalGrOfFats * (showCalories ? 9 : 1)} { showCalories? "Calorias" : "Gramos"}</h1>
                        <h1>Total Protein: {totalGrOfProtein * (showCalories ? 4 : 1)} { showCalories? "Calorias" : "Gramos"}</h1>
                        <h1>Total Calories: { totalCalories }</h1>
                    </>)
                    : null

            }
            <Button><AddIcon /></Button>
        </>
    )
}
