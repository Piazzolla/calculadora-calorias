import { useContext, useEffect, useState } from 'react';
import { BudgetContext } from '../../context/budget/BudgetContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import { Box } from '@mui/material';

export const BudgetSummary = () => {

    const { budget, totalGrOfCarbs, totalGrOfFats, totalGrOfProtein, totalCalories } = useContext(BudgetContext);

    const [showCalories, setShowCalories] = useState(false);


    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCalories(event.currentTarget.checked);
    };

    return (
        <>
            <Box className='summary-container'>
                <h3>Budget Summary:</h3>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Show: </FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            checked={showCalories}
                            control={<Switch onChange={(e) => handleSwitchChange(e)} color="primary" />}
                            label={showCalories ? "Calorias" : "Gramos"}
                            labelPlacement="bottom"
                        />
                    </FormGroup>
                </FormControl>
                {
                    budget.length ?
                        (<>

                            <h2>Total Carbs: {totalGrOfCarbs * (showCalories ? 4 : 1)} {showCalories ? "Calorias" : "Gramos"}</h2>
                            <h2>Total Fat: {totalGrOfFats * (showCalories ? 9 : 1)} {showCalories ? "Calorias" : "Gramos"}</h2>
                            <h2>Total Protein: {totalGrOfProtein * (showCalories ? 4 : 1)} {showCalories ? "Calorias" : "Gramos"}</h2>
                            <h2>Total Calories: {totalCalories}</h2>
                        </>)
                        : null

                }
                <Button><AddIcon /></Button>
            </Box>
        </>
    )
}
