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
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { WhiteSwitch } from './WhiteSwitch';
import { round } from '../../helpers/round';

// const WhiteSwitch = styled(Switch)(({ theme }) => ({
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       color: grey[50],
//       '&:hover': {
//         backgroundColor: alpha(grey[50], theme.palette.action.hoverOpacity),
//       },
//     },
//     '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//       backgroundColor: grey[50],
//     },
//   }));
  const label = { inputProps: { 'aria-label': 'White cals grams switch' } };

export const BudgetSummary = () => {

    const { budget, totalGrOfCarbs, totalGrOfFats, totalGrOfProtein, totalCalories, saveBudgetToDB } = useContext(BudgetContext);

    const [showCalories, setShowCalories] = useState(false);


    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCalories(event.currentTarget.checked);
    };

    const handleOnSaveBudget = async () => {
        const result = await saveBudgetToDB();
        console.log(result);
    }

    return (
        <>
            <Box className='summary-container'>
                <h3 className='budget-summary-title'>Budget Summary</h3>
                <FormControl className='cal-gram-selector' component="fieldset">
                    <FormGroup aria-label="position" >
                    <FormLabel component="legend" className='cal-gram-selector-label'>Show: </FormLabel>
                        <FormControlLabel
                            checked={showCalories}
                            control={<WhiteSwitch onChange={(e) => handleSwitchChange(e)} {...label} />}
                            label={showCalories ? "Calories" : "Grams"}
                            labelPlacement="end"
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
                            <MacrosChart showCalories={showCalories} foodData={{ 
                                
                                fat:showCalories? round((totalGrOfFats*9)*100/totalCalories):totalGrOfFats, 
                                carbs:showCalories? round((totalGrOfCarbs*4)*100/totalCalories):totalGrOfCarbs, 
                                protein:showCalories? round((totalGrOfProtein*4)*100/totalCalories):totalGrOfProtein}}/>
                        </div>)
                        : null

                }
                <Button onClick={handleOnSaveBudget} className='save-budget-button'>
                    <AddIcon className='save-budget-button-icon' />Save budget</Button>
            </Box>
        </>
    )
}
