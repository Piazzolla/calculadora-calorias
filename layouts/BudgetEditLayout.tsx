import { Box } from '@mui/material'
import { AddIngredients } from 'components/budget/AddIngredients';
import { BudgetSummary } from 'components/budget/BudgetSummary';


interface Props {
    addIngredient:  React.ReactNode, 
    summary:        React.ReactNode
}

export const BudgetEditLayout = ({ addIngredient, summary }:Props) => {
    return (
        <Box sx={{
            display: 'flex', 
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box>{addIngredient}</Box>
            <Box>{summary}</Box>
        </Box>
    )
}
