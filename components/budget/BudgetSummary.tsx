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
import Typography from '@mui/material/Typography';
import MacrosChart from './MacrosChart';


export const BudgetSummary = () => {

    const { budget, totalGrOfCarbs, totalGrOfFats, totalGrOfProtein, totalCalories } = useContext(BudgetContext);

    const [showCalories, setShowCalories] = useState(false);


    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCalories(event.currentTarget.checked);
    };

    return (
        <>
            <Box className='summary-container'>
                <h3 className='budget-summary-title'>Budget Summary</h3>
                <FormControl className='cal-gram-selector' component="fieldset">
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
                        (<div className='summary-data-view'>
                            <ul className='summary-list'>

                                <li className='summary-list-item'>
                                    <Typography sx={{ fontSize:'1.6rem', textTransform: 'uppercase' }}>Total Carbs:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalGrOfCarbs * (showCalories ? 4 : 1)} {showCalories ? "Cals" : "Grams"}</Typography>
                                </li>
                                <li className='summary-list-item'>
                                    <Typography sx={{ fontSize:'1.6rem', textTransform: 'uppercase' }}>Total Fat:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalGrOfFats * (showCalories ? 9 : 1)} {showCalories ? "Cals" : "Grams"}</Typography>
                                </li>
                                <li className='summary-list-item'>
                                    <Typography sx={{ fontSize:'1.6rem', textTransform: 'uppercase' }}>Total Protein:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalGrOfProtein * (showCalories ? 4 : 1)} {showCalories ? "Cals" : "Grams"}</Typography>
                                </li>
                                <li className='summary-list-item'>
                                    <Typography sx={{ fontSize:'1.6rem', textTransform: 'uppercase' }}>Total Calories:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalCalories}</Typography>
                                </li>
                            </ul>
                            <MacrosChart  foodData={{ fat:totalGrOfFats, carbs:totalGrOfCarbs, protein:totalGrOfProtein}}/>
                        </div>)
                        : null

                }
                <Button><AddIcon /></Button>
            </Box>
        </>
    )
}
