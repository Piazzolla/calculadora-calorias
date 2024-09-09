import { useContext, useEffect, useState } from 'react';
import { BudgetContext } from '../../context/budget/budget-context';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MacrosChart from './macros-chart';
import { WhiteSwitch } from './white-switch';
import { round } from '../../helpers/round';
import styles from '../../styles/BudgetSummary.module.css';

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
            <Box className={styles['summary-container']}>
                <h3 className={styles['budget-summary-title']}>Budget Summary</h3>
                <FormControl className={styles['cal-gram-selector']} component="fieldset">
                    <FormGroup aria-label="position" >
                    <FormLabel component="legend" className={styles['cal-gram-selector-label']}>Show: </FormLabel>
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
                        (<div className={styles['summary-data-view']}>
                            <ul className={styles['summary-list']}>

                                <li className={styles['summary-list-item']}>
                                    <Typography sx={{ fontSize:'1.2rem', textTransform: 'uppercase' }}>Total Carbs:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalGrOfCarbs * (showCalories ? 4 : 1)} {showCalories ? "Cals" : "Grams"}</Typography>
                                </li>
                                <li className={styles['summary-list-item']}>
                                    <Typography sx={{ fontSize:'1.2rem', textTransform: 'uppercase' }}>Total Fat:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalGrOfFats * (showCalories ? 9 : 1)} {showCalories ? "Cals" : "Grams"}</Typography>
                                </li>
                                <li className={styles['summary-list-item']}>
                                    <Typography sx={{ fontSize:'1.2rem', textTransform: 'uppercase' }}>Total Protein:</Typography>
                                    <Typography sx={{ fontSize:'1.6rem', marginBottom:'1rem'}}> {totalGrOfProtein * (showCalories ? 4 : 1)} {showCalories ? "Cals" : "Grams"}</Typography>
                                </li>
                                <li className={styles['summary-list-item']}>
                                    <Typography sx={{ fontSize:'1.2rem', textTransform: 'uppercase' }}>Total Calories:</Typography>
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
                <Button onClick={handleOnSaveBudget} className={styles['save-budget-button']}>
                    <AddIcon className={styles['save-budget-button-icon']} />Save budget</Button>
            </Box>
        </>
    )
}
